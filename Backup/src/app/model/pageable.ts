export interface Pageable {
  page:number;
  size:number;
  sort:string;
  sortDirection:string;
  filter:string;
}