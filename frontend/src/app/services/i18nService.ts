import {Injectable} from "@angular/core";
import {AbstractControl} from "@angular/forms";

/**
 * Servicio de frases
 * TODO: esperando a ver como cambia la implemetnacion de angular, para no utilizar un paquete externo
 */
@Injectable()
export class  I18nService {

  /**
   * validation messages
   * @returns {string}
   * @param control
   */
  getValidationMessage(control:AbstractControl):string{
    let error= control?control.errors:null;
    if (error==null) return "";
    // if (error.required) return "Este dato es requerido";
    // if (error.minlength) return "Ingrese al menos "+error.minlength.requiredLength+" caracteres";
    // if (error.pattern) return "Ingrese un valor válido. "+error.pattern.msg;
    // if (error.email) return "Ingrese un mail válido.";
    // if (error.max) return "Ingrese un valor menor o igual a "+error.max.max;
    // if (error.msg) return this.getMessage(error.msg);
    // if (error.matDatepickerParse) return "Ingrese una fecha válida";
    // if (error.cpoIncomplete) return "Ingrese un número de orden o adjunte un archivo.";
    // console.error("Tipo de error no definido: "+error.msg);
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
      case "ADMINISTRATION":result="Administración";break;
      case "ADMINISTRATOR":result="Administrador";break;
    
      case "TECHNICIAN":result="Técnico"; break;

      //validaciones
      case "VALIDATOR_ALPHA":result="Solo letras y espacios."; break;
      case "VALIDATOR_ALPHA_SYMBOLS":result="Solo letras y caracteres de puntuación."; break;
      case "VALIDATOR_ALPHANUMERIC":result="Solo letras y números."; break;
      case "VALIDATOR_ALPHANUMERIC_SYMBOLS":result="Solo letras, números y caracteres de puntuación."; break;
      case "VALIDATOR_ALPHANUMERIC_SYMBOLS_RESTRICTED":result="Solo letras, números y guiones."; break;
      case "VALIDATOR_NUMERIC":result="Solo números."; break;
      case "VALIDATOR_INTERNAL_NUMBER":result="Ingrese el número de interno."; break;
      case "VALIDATOR_URL":result="Ingrese un formato de url válido."; break;
      case "VALIDATOR_HTML":result="Solo letras, números, caracteres de puntuación y tags html.";break;

      //estado profesionaal //FIXME
      case "ACTIVE":result="Activo";break;
      case "INACTIVE":result="Inactivo";break;
      case "DELETE":result="Eliminación  pendiente"; break;

      //estado busquedas //FIXME
      case "job.DRAFT":result="Borrador";break;
      case "job.PENDING":result="Pendiente Asignación";break;
      case "job.REJECTED":result="Rechazada";break;
      case "job.ACTIVE":result="Activa";break;
      case "job.ON_HOLD":result="Pausada";break;
      case "job.CLOSE_COMPLETE":result="Completa";break;
      case "job.CLOSE_INCOMPLETE":result="Incompleta";break;

      //estados del ,
      case "candidate.IN_PROGRESS":result="Contacto en progreso"; break;
      case "candidate.SELECTED":result="Seleccionado"; break;
      case "candidate.ENTERED":result="Ingreso confirmado"; break;
      case "candidate.ON_HOLD":result="En pausa"; break;

      //default
      default:
        console.error("Frase no definida: "+key);
    }
    return result;
  }
}
