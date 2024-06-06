import {Injectable} from "@angular/core";
import {AbstractControl} from "@angular/forms";

/**
 * Servicio de frases
 * TODO: esperando a ver como cambia la implementacion de angular, para no utilizar un paquete externo
 */
@Injectable()
export class  I18nService {

  /**
   * validation messages
   * @returns {string}
   * @param control
   */
  getValidationMessage(control:AbstractControl): string{
    let error = control ? control.errors : null;
    if (error==null) return "";
    if (error["required"]) return "Este dato es requerido";
    if (error["pattern"]) return "Ingrese un valor válido. "+error["pattern"].msg;
    if (error["ipAddress"]) return "Ingrese una direción Ip valida.";
    // if (error.minlength) return "Ingrese al menos "+error.minlength.requiredLength+" caracteres";
    // if (error.max) return "Ingrese un valor menor o igual a "+error.max.max;
    // if (error.msg) return this.getMessage(error.msg);
    console.error("Tipo de error no definido: "+error["msg"]);
    return "Ingrese un valor válido";
  }

  /**
   * devuelve una frase
   * @param key
   */
  getMessage(key:string):string {
    let result:string="";
    switch (key) {
      //roles
      case "ADMINISTRATOR":result="Administrador";break;
      case "MANAGER":result="Gerente"; break;
      case "TECHNICIAN":result="Técnico"; break;
      case "EMPLOYEE":result="Empleado"; break;

      //validaciones
      case "VALIDATOR_ALPHA":result="Solo letras y espacios."; break;
      case "VALIDATOR_ALPHA_SYMBOLS":result="Solo letras y caracteres de puntuación."; break;
      case "VALIDATOR_ALPHANUMERIC":result="Solo letras y números."; break;
      case "VALIDATOR_ALPHANUMERIC_SYMBOLS":result="Solo letras, números y caracteres de puntuación."; break;
      case "VALIDATOR_ALPHANUMERIC_SYMBOLS_RESTRICTED":result="Solo letras, números y guiones."; break;
      case "VALIDATOR_NUMERIC":result="Solo números."; break;
      case "VALIDATOR_ADDRESS_IP":result="Formato: XXX.XXX.XXX.XXX"; break;
      case "VALIDATOR_URL":result="Ingrese un formato de url válido."; break;
      case "VALIDATOR_HTML":result="Solo letras, números, caracteres de puntuación y tags html.";break;

      //default
      default:
        console.error("Frase no definida: "+key);
    }
    return result;
  }
}
