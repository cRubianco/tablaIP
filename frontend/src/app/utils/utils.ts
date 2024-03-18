import {Constants} from "./constants";


/**
 * utilidades varias
 */
 export class Utils {

   static lastColor:string; //se usa, para no repetir un color, en la funcion de color random

 /**
   * elimina los puntos y convierte las comas en puntos
   * @param decimal
   * @return
   */
  static deserializeDecimal(decimal:any): number {
    return (decimal != null)
      ? decimal.replaceAll(Constants.CHARACTER_THOUSANDS_ES_AR, '')
        .replace(Constants.CHARACTER_DECIMAL_ES_AR, Constants.CHARACTER_DECIMAL_EN)
      : null;
  }

  /**
   * convierte los puntos decimales en comas, y agrega puntos como separadores de miles,
   * redondeando a fractionDigits decimales
   * @param decimal
   * @param fractionDigits
   * @return
   */
  static serializeDecimal(decimal: number, fractionDigits?: number): string {
    return (decimal != null)
      ? decimal.toFixed(fractionDigits || 2)
        .replace(Constants.CHARACTER_DECIMAL_EN, Constants.CHARACTER_DECIMAL_ES_AR)
        .replace(/\B(?=(\d{3})+(?!\d))/g, Constants.CHARACTER_THOUSANDS_ES_AR)
      : "";
  }

  /**
   * normaliza nro de tells para whatsapp
   * @param phone
   */
  static normalicePhone(phone:string):string {
    let normalized:string=phone.replace(/[- _+)(]/g,'');
    if (normalized.startsWith("15") && normalized.length==10)
      normalized="54911"+normalized.replace("15","");
    if (normalized.startsWith("11") && normalized.length==10)
      normalized="549"+normalized;
    //console.log("phone:"+phone+" normalized:"+normalized);
    return normalized;
  }

 }  