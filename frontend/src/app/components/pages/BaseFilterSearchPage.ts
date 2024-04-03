import { AfterViewInit, OnInit, ViewChild, Directive } from "@angular/core";
import {NavigationEnd} from "@angular/router";
import {merge, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, tap} from "rxjs/operators";

import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

import {OnDestroyMixin, untilComponentDestroyed} from "@w11k/ngx-componentdestroyed";
import {Pageable} from "@model/pageable";
import { Page } from "@model/dto/page";
import { ApiResponse } from "@model/dto/apiResponse";
import {UtilServices} from "@services/utilServices";
import {PopupService} from "@services/popupService";
import {Constants} from "@utils/constants";

/**
 * clase base para paginas con busqueda por filtro
 */
@Directive()
export abstract class BaseFilterSearchPage extends OnDestroyMixin implements OnInit, AfterViewInit {

  //propiedades genericas
  protected readonly abstract pageName:string;//nombre pagina

  //propiedades que deben definir las paginas que implementan
  readonly abstract displayedColumns:string[];
  readonly abstract dataSource:MatTableDataSource<any>; //dataSource
  readonly abstract loadDataService:(pageable:Pageable)=>Promise<ApiResponse<Page<any>>>;

  //propiedades que se heredan
  isLoadingResults:boolean=true; //isLoadingResults
  @ViewChild(MatPaginator,{static:true}) protected paginator: MatPaginator; //paginador
  @ViewChild(MatSort,{static:true}) protected sort: MatSort; //orden
  totalElements:number=0; // cantidad de resultados totales
  filterKeyUp = new Subject<KeyboardEvent>(); //filterKeyUp
  filter:string=""; //filter

  protected linkId:string; //se utiliza para cuando se crea un link para acceder a un determinado registro

  /**
   * constructor
   * @param utilService
  //  * @param popupService
   */
  protected constructor(protected utilService:UtilServices){
    super();
    //recupero el link id si tengo que ir directo a un registro
    const state = utilService.getState();
    if (state) this.linkId = state.linkId;
    //parche para detectar la navegacion a la misma pagina
    this.utilService.getRouterEvents().pipe(untilComponentDestroyed(this))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const state=this.utilService.getState();
          if (state && state.linkId && this.linkId==null) {//valido que en el request tenga el linkid, pero que no sea el del constructor
            this.linkId=state.linkId;
            this.loadData();
          }
        }});
  }

  ngOnInit(): void {
    //recupero datos de la paginas
    let pages:any = JSON.parse(sessionStorage.getItem(Constants.SESSION_STORE.PAGES) || "{}");
    this.setFilterData(pages[this.pageName]);//seteo el estado inicial del filtro y paginacion
  }

  /**
   * init
   */
  ngAfterViewInit() {
    //filtro
    this.filterKeyUp.pipe(
      untilComponentDestroyed(this),
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => {
        this.paginator.pageIndex = 0;
        this.loadData();
      })).subscribe();
    //si cambio el orden, paso a la primer pagina
    this.sort.sortChange.pipe(untilComponentDestroyed(this)).subscribe(() => this.paginator.pageIndex = 0);
    //evento para si cambia la tabla
    merge(this.sort.sortChange, this.paginator.page).pipe(untilComponentDestroyed(this)).subscribe(()=>this.loadData());
    this.loadData();
  }

  /**
   * destroy
   */
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    //recupero datos de paginas
    let pages:any = JSON.parse(sessionStorage.getItem(Constants.SESSION_STORE.PAGES) || "{}");
    //guardo los datos del filtro actual
    pages[this.pageName]=this.getFilterData();
    sessionStorage.setItem(Constants.SESSION_STORE.PAGES,JSON.stringify(pages));
  }

  //=============== metodos  ======================

  /**
   * ver item
   * @param data
   * @param event
   */
  abstract viewAction(data: any, event?: any): void;
  
  /**
   * agregar item
   */
  abstract addAction(): void;

  /**
   * editar item
   * @param data
   * @param event
   */
  abstract editAction(data: any, event: any): void;
  
  /**
   * eliminar item
   * @param data
   * @param event
   */
  abstract deleteAction(data: any, event: any):void;


  //============== metodos ==============

  // /**
  //  * eliminar registro
  //  * @param deleteFunction
  //  * @param data
  //  * @param id
  //  */
  // protected delete(deleteFunction:(T)=>Promise<ApiResponse<T>>, data: any, id: string, msg?: any):void{
  //   const text:string="¿Esta seguro que desea eliminar el registro <b>"+id+"</b> ?";
  //   this.popupService.showConfirmationPopup(text).afterClosed()
  //     .pipe(untilComponentDestroyed(this))
  //     .subscribe(result=>{
  //       if (result)
  //         deleteFunction(data).then((response)=>{
  //           if (response.status==200) {
  //             this.utilService.showSnack("Registro: "+id+(msg || " eliminado."));
  //             this.loadData();
  //           }
  //         });
  //     });
  // }

   /**
   * recarga la busqueda
   */
  protected loadData(): void {
    this.isLoadingResults=true;
    const request:Pageable={
      page:this.paginator.pageIndex,
      size:this.paginator.pageSize,
      sort: this.sort.active,
      sortDirection: this.sort.direction,
      filter: this.filter ? this.filter : ''
    }
    this.loadDataService(request).then(result=> {
          this.dataSource.data=result.data!.page;
          this.totalElements=result.data!.totaElements;
    }).finally(()=>{
      this.isLoadingResults=false
    });
  }
  /**
   * recarga la busqueda
   */
  // protected loadData():void {
  //   this.isLoadingResults=true;
  //   const request:Pageable={
  //     page:this.paginator.pageIndex,
  //     size:this.paginator.pageSize,
  //     sort: this.sort.active,
  //     sortDirection: this.sort.direction,
  //     filter: this.filter?this.filter:null
  //   }
  //   if (this.linkId) { //si ven por un link directo, lo utilizo por unica vez
  //     request.filter=this.linkId;
  //     this.linkId=null;
  //   }
  //   this.loadDataService(request).then(result=> {
  //     this.dataSource.data=result.data.page;
  //     this.totalElements=result.data.totaElements;
  //   }).finally(()=>{
  //     this.isLoadingResults=false
  //   });
  // }

  /**
   * setea los datos recuperados de la session
   * @param page
   */
  protected setFilterData(page: any): void {
    if (page) {
      this.filter = page.filter;
      this.paginator.pageSize = page.paginator.size;
      this.paginator.pageIndex = page.paginator.index;
      this.sort.active = page.sort.active;
      this.sort.direction = page.sort.direction;
    }
  }

  /**
   * devuelve los datos de los filtros
   */
  protected getFilterData() {
    return {
      filter:this.filter,
      paginator: { size:this.paginator.pageSize, index:this.paginator.pageIndex},
      sort: {active:this.sort.active, direction:this.sort.direction}
    };
  }

  cleanFilter() {
    this.filter='';
    this.loadData();
  }
  
}
