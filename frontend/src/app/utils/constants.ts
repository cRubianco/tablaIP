import * as moment from "moment";

/**
 *  Constantes
 */
  export const Constants = {
    VERSION:"1.2.2",//app version

    TITLE: 'Tabla IP',
    SUB_TITLE: 'Direcciones IP',
    
    URL: {
      API_PATH:"/api/",
      TITLE: 'Tabla de IP',
      DASHBOARD:"dashboard",
      LOGIN: "login",
      ADDRESSES:"addresses",
      ADDRESS:"address",
      BASEPAGE: "basepage",
      REDIRECT: "redirect",
    },

    LOCAL_STORE:{ //local store
      REMEMBER: "rememberMe",
      REDIRECT: "redirect", 
    },
    SESSION_STORE: {//session store
      PAGES: "pages" //guarda los filtros de las paginas abm
    },
  
    DATES: {
      PAST_50_YEARS: moment().subtract(50,'years').toDate(),
      PAST_20_YEARS: moment().subtract(20,'years').toDate(),
      FORMATS: {
        DDMMYYYY: 'dd/MM/yyyy',
        YYYYMM: 'yyyy-MM',
        YYYYMMDD: 'yyyy-MM-dd',
        MMMYYYY: 'MMM YYYY',
        YYYY: 'YYYY',
        // YYYYMMDD: 'YYYYMMDD',
      },
      INPUT_FORMATS: { //se para para los date picker
        DAY_MONTH_YEAR:{
          parse: { dateInput: 'DD/MM/YYYY'},
          display: {dateInput: 'DD/MM/YYYY',monthYearLabel: 'MMM YYYY',dateA11yLabel: 'LL',monthYearA11yLabel: 'MMMM YYYY'}
        },
        MONTH_YEAR:{
          parse: { dateInput: 'MM/YYYY'},
          display: {dateInput: 'MM/YYYY',monthYearLabel: 'MMM YYYY',dateA11yLabel: 'LL',monthYearA11yLabel: 'MMMM YYYY'}
        }
      }
    },
    
    CHARACTER_THOUSANDS_ES_AR: '.',
    CHARACTER_DECIMAL_ES_AR: ',',
    CHARACTER_DECIMAL_EN: '.',
  
  } 