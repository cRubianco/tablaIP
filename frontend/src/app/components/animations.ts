import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

/**
 * animaciones
 */
export const Animations = {

  /**
   * animacion para expandir detalle en tablas
   */
  tableDetailExpand: trigger("detailExpand", [
    state("collapsed", style({height: "0px", minHeight: "0"})),
    state("expanded", style({height: "*"})),
    transition("expanded <=> collapsed", animate("250ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
  ]),

  shake: trigger("shake", [
    transition(":increment", animate('1s 0s',
      keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
        style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
        style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
        style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
        style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
        style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
        style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
        style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
        style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
        style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
        style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
      ])
    ))])

};
