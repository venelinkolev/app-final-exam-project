import { IBase } from './base';

export interface IUser extends IBase {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LUser {
  email: string;
  password: string;
}
