import {InvalidField} from "./InvalidFieldResponse.model";

export class AppResponse<T> {
  success: boolean;
  message: string;
  invalidFields: InvalidField[];
  data: T


  constructor(success: boolean, message: string, invalidFields: InvalidField[], data: T) {
    this.success = success;
    this.message = message;
    this.invalidFields = invalidFields;
    this.data = data;
  }
}
