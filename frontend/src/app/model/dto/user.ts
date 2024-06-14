/**
 * Usuario
 */
import {Role} from "../enum/role";

export interface User {
  user:string;
  password?:string;
  role:Role;
}