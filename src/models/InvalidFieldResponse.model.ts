export class InvalidField {
  fieldName: string;
  rejectedValue: any;

  constructor(fieldName: string, rejectedValue: any) {
    this.fieldName = fieldName;
    this.rejectedValue = rejectedValue;
  }
}
