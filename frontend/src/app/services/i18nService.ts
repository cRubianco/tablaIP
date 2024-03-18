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
      case "ADMINISTRATION_ASSISTANT":result="Asistente Administrativo";break;
      case "ADMINISTRATION_CHIEF":result="Responsable Administrativo";break;
      case "ADMINISTRATOR":result="Administrador";break;
      case "ANALYST":result="Analista RRHH";break;
      case "SELECTOR":result="Selector/a"; break;
      case "SELECTOR_CHIEF":result="Responsable de RRHH"; break;
      case "BUSINESS_ASSISTANT":result="Asistente Comercial"; break;
      case "BUSINESS_MAN":result="Comercial"; break;
      case "BUSINESS_CHIEF":result="Responsable Comercial"; break;
      case "BUSINESS_TECHNICIAN":result="Comercial Técnico"; break;
      case "GROWTH_LEADER":result="Growth Leader"; break;
      case "HEAD_HUNTER":result="Head Hunter"; break;
      case "MANAGER":result="Gerente RRHH"; break;
      case "PEOPLE_CARE":result="People Care"; break;
      case "TECHNICIAN":result="Técnico"; break;
      case "DEMAND_PLANNER_ANALYST":result="Demand Planner Analyst"; break;
      case "EMPLOYEE":result="Empleado"; break;
      case "EXEMPLOYEE":result="Exempleado"; break;

      //validaciones
      case "VALIDATOR_ALPHA":result="Solo letras y espacios."; break;
      case "VALIDATOR_ALPHA_SYMBOLS":result="Solo letras y caracteres de puntuación."; break;
      case "VALIDATOR_ALPHANUMERIC":result="Solo letras y números."; break;
      case "VALIDATOR_ALPHANUMERIC_SYMBOLS":result="Solo letras, números y caracteres de puntuación."; break;
      case "VALIDATOR_ALPHANUMERIC_SYMBOLS_RESTRICTED":result="Solo letras, números y guiones."; break;
      case "VALIDATOR_NUMERIC":result="Solo números."; break;
      case "VALIDATOR_CUIL":result="Formato: XX-XXXXXXXX-X"; break;
      case "VALIDATOR_CUIT":result="Formato: XX-XXXXXXXX-X"; break;
      case "VALIDATOR_PHONE":result="Ingrese un formato de teléfono válido."; break;
      case "VALIDATOR_INTERNAL_NUMBER":result="Ingrese el número de interno."; break;
      case "VALIDATOR_URL":result="Ingrese un formato de url válido."; break;
      case "VALIDATOR_HTML":result="Solo letras, números, caracteres de puntuación y tags html.";break;
      case "VALIDATOR_HOUR":result="Ingrese un formato de hora válido.";break;
      case "VALIDATOR_CELLPHONE":result="Ingrese un formato de teléfono celular válido."; break;
      //estado profesionaal //FIXME
      case "ACTIVE":result="Activo";break;
      case "INACTIVE":result="Inactivo";break;
      case "EMPLOYEE":result="Empleado";break;
      case "NOT_DISTURB":result="No llamar";break;
      case "BYS":result="ByS";break;
      case "DELETE":result="Eliminación  pendiente"; break;

      //estado busquedas //FIXME
      case "job.DRAFT":result="Borrador";break;
      case "job.PENDING":result="Pendiente Asignación";break;
      case "job.REJECTED":result="Rechazada";break;
      case "job.ACTIVE":result="Activa";break;
      case "job.ON_HOLD":result="Pausada";break;
      case "job.CLOSE_COMPLETE":result="Completa";break;
      case "job.CLOSE_INCOMPLETE":result="Incompleta";break;

      //estados del candidato,
      case "candidate.PRESELECTED":result="PreSeleccionado"; break;
      case "candidate.IN_PROGRESS":result="Contacto en progreso"; break;
      case "candidate.DISCARDED":result="Desestimado"; break;
      case "candidate.PENDING_INTERVIEW":result="Entrevista pendiente"; break;
      case "candidate.INTERVIEW_OK":result="Entrevista OK"; break;
      case "candidate.SELECTED":result="Seleccionado"; break;
      case "candidate.PRESENTED_TO_SALESMAN":result="Revisión comercial"; break;
      case "candidate.PENDING_SALES_INTERVIEW":result="Entrevista comercial pendiente"; break;
      case "candidate.SALES_REQUEST_INTERVIEW":result="Entrevista solicitada por Comercial"; break;
      case "candidate.SELECTED_SALESMAN":result="Seleccionado"; break;
      case "candidate.PRESENTED_TO_CLIENT":result="Evaluación cliente pendiente"; break;
      case "candidate.CLIENT_REQUEST_INTERVIEW":result="Entrevista solicitada por Cliente"; break;
      case "candidate.PENDING_CLIENT_INTERVIEW":result="Entrevista en cliente"; break;
      case "candidate.CONFIRMED":result="Confirmado por cliente"; break;
      case "candidate.PSYCHOTECHNICAL_OK":result="Psicotecnico OK"; break;
      case "candidate.PRE_OCCUPATIONAL_OK":result="Pre-Ocupacional OK"; break;
      case "candidate.ENTER_INCOMPLETE":result="Ingreso incompleto"; break;
      case "candidate.PENDING_BILLING_DATA":result="Fecha de ingreso pendiente"; break;
      case "candidate.PENDING_LOAD_BILLING":result="Facturación pendiente"; break;
      case "candidate.PENDING_ENTER":result="Ingreso en proceso"; break;
      case "candidate.ENTERED":result="Ingreso confirmado"; break;
      case "candidate.ON_HOLD":result="En pausa"; break;

      //titulos popup accion candidatos
      case "candidate.popup.UNASSIGN":result="Desasignar el candidato de"; break;
      case "candidate.popup.COMMENT":result="Comentario para candidato"; break;
      case "candidate.popup.CONTACT":result="Registrar Contacto con"; break;
      case "candidate.popup.TO_INTERVIEW":result="Coordinar Entrevista con"; break;
      case "candidate.popup.APPROVE_INTERVIEW":result="Aprobar entrevista con "; break;
      case "candidate.popup.EDIT_CARD1":result="Ficha de "; break;
      case "candidate.popup.EDIT_CARD2":result="Ficha de "; break;
      case "candidate.popup.SELECT":result="Seleccionar para presentar a"; break;
      case "candidate.popup.PRESENT_TO_SALESMAN":result="Presentar al Comercial a"; break;
      case "candidate.popup.REQ_SALES_INTERVIEW":result="Solicitar Entrevista con"; break;
      case "candidate.popup.PRESENT_TO_CLIENT":result="Presentar al Cliente a"; break;
      case "candidate.popup.REQ_CLIENT_INTERVIEW":result="Solicitar Entrevista con"; break;
      case "candidate.popup.APPROVE_CLIENT_INTERVIEW":result="Aprobar entrevista con "; break;
      case "candidate.popup.CONFIRM":result="Confirmar a"; break;
      case "candidate.popup.PSYCHOTECHNICAL":result="Cargar Psicotecnico de"; break;
      case "candidate.popup.PRE_OCCUPATIONAL":result="Cargar Pre-Ocupacional de"; break;
      case "candidate.popup.LOAD_BILLING_DATA":result="Confirmar Carga de Facturación de"; break;
      case "candidate.popup.ENTER":result="Cargar Ingreso de"; break;
      case "candidate.popup.REJECT_ENTER":result="Rechazar ingreso de"; break;
      case "candidate.popup.CONFIRM_ENTER":result="Confirmar ingreso de"; break;
      case "candidate.popup.DISCARD":result="Desestimar a"; break;
      case "candidate.popup.REACTIVATE":result="Reactivar a"; break;
      case "candidate.popup.ON_HOLD": result = "Pausar a"; break;
      case "candidate.popup.RESUME": result = "Reactivar a"; break;

      //acciones candidato realizadas
      case "candidate.snack.COMMENT":result="Comentario agregado."; break;
      case "candidate.snack.CONTACT":result="Contacto con candidato registrado."; break;
      case "candidate.snack.TO_INTERVIEW":result="Entrevista con candidato coordinada."; break;
      case "candidate.snack.APPROVE_INTERVIEW":result="Entrevista con candidato Aprobada."; break;
      case "candidate.snack.SELECT":result="Candidato seleccionado."; break;
      case "candidate.snack.PRESENT_TO_SALESMAN":result="Candidato enviado al comercial."; break;
      case "candidate.snack.REQ_SAKES_INTERVIEW":result="Entrevista con candidato solicitada."; break;
      case "candidate.snack.PRESENT_TO_CLIENT":result="Candidato enviado al cliente."; break;
      case "candidate.snack.REQ_CLIENT_INTERVIEW":result="Entrevista con candidato solicitada."; break;
      case "candidate.snack.APPROVE_CLIENT_INTERVIEW":result="Entrevista con candidato aprobada."; break;
      case "candidate.snack.CONFIRM":result="Candidato confirmado."; break;
      case "candidate.snack.PSYCHOTECHNICAL":result="Psicotecnico cargado."; break;
      case "candidate.snack.PRE_OCCUPATIONAL":result="Pre-Ocupacional cargado."; break;
      case "candidate.snack.CONFIRM_BILLING_DATA":result="Datos de ingreso cargados."; break;
      case "candidate.snack.LOAD_BILLING_DATA":result="Carga de Facturación confirmada."; break;
      case "candidate.snack.ENTER":result="Ingreso de Candidato cargado."; break;
      case "candidate.snack.REJECT_ENTER":result="Ingreso de Candidato rechazado."; break;
      case "candidate.snack.CONFIRM_ENTER":result="Ingreso de Candidato confirmado."; break;
      case "candidate.snack.DISCARD":result="Candidato desestimado."; break;
      case "candidate.snack.UNASSIGN":result="Candidato desasignado."; break;
      case "candidate.snack.":result="Candidato reactivado."; break;
      case "candidate.snack.ON_HOLD":result="Candidato pausado."; break;
      case "candidate.snack.RESUME":result="Candidato reactivado."; break;
      case "candidate.snack.EDIT_CARD1":result="Se modificó la ficha del Candidato."; break;
      case "candidate.snack.EDIT_CARD2":result="Se modificó la ficha del Candidato."; break;

      //Receptor de notificaciones
      case "COMMENT.RECEIVER.BUSINESS_CHIEF":
      case "COMMENT.RECEIVER.BUSINESS_MAN":result="Comercial"; break;
      case "COMMENT.RECEIVER.SELECTOR_CHIEF":
      case "COMMENT.RECEIVER.SELECTOR":result="Selector/a"; break;

      //default
      default:
        console.error("Frase no definida: "+key);
    }
    return result;
  }
}
