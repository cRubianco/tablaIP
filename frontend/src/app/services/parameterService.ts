import { Injectable } from "@angular/core";

/**
 * Servicio de datos parametricos
 */
@Injectable()
export class ParametersService {

  /**
   * combo si/no
   */
  // yesNo:[string, boolean][]=[["Si",true], ["No",false]];
  yesNoStr:[string, string][]=[["Si","S"], ["No","N"]];

  /**
   * genero
   */
  genders:[string, string][]=[["Femenino","F"], ["Masculino","M"]];

  
  /**
   * Tipos
   */
  types:[string, string][]=[["Antena","A"], ["Impresora","I"], ["PC", "P"], ["Router","R"], ["Servidor","S"], ["Switch","Sw"], ["Terminal","T"],
                          ["Teléfono","Tel"]];  

  /**
   * Groups
   */
  groups:[string, string][]=[ ["Acción Social","Social"], ["Asesoría Legal","AsLegal"], ["Contaduria","Conta"], ["Corralon","Corra"], 
                              ["Hospital","Hosp"], ["Informática","Infor"], ["Obras Públicas","Obras"], ["Rentas","Rentas"], 
                              ["Recursos Humanos","Perso"], ["Servicio Local","Social"], ["Tesorería","Teso"], ["Turismo","Turism"], ];

  /**
   * provincias
   */
  provinces: string[]=["CAP. FED.", "BS. AS.", "CATAMARCA", "CÓRDOBA", "CORRIENTES","CHACO","CHUBUT", "ENTRE RIOS", "FORMOSA",
  "JUJUY","LA PAMPA", "LA RIOJA", "MENDOZA", "MISIONES", "NEUQUEN","RIO NEGRO", "SALTA", "SAN JUAN", "SAN LUIS",
  "SANTA CRUZ","SANTA FE", "SGO.ESTERO", "T.DE FUEGO.", "TÚCUMAN"];

  //===================== constructor ================================


  //===================== metodos ====================================

  /**
   * devuelve el valor a partir de un codigo
   * @param list
   * @param key
   */
  getName(list:[string,string|number][],key:string|number):string {
    let result="";
    if (key)
      for (const item of list) {
        if (item[1]==key) {
          result=item[0];
          break;
        }
      }
    return result;
  }

  /**
   *
   * @param list
   * @param key
   * @param keyName
   * @param valueName
   */
  // getValueNameFromList(list: Object[], key: string, keyName: string, valueName: string): string {
  //   let result="";
  //   if (key) {
  //     for (const item of list) {
  //       if (item[keyName] == key) {
  //         result = item[valueName];
  //         break;
  //       }
  //     }
  //   }
  //   return result;
  // }


}  