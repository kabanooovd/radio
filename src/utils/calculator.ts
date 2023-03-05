import { CONTROL } from "../config";

export class Calculator {
  // constructor(
  //   public salaryValue: string,
  //   public isNdfl: boolean,
  //   public control: string | null,
  // ) {
  //   this.salaryValue = salaryValue
  //   this.isNdfl = isNdfl
  //   this.control = control
  // }

  static calcValues(salaryValue: number, isNdfl: boolean) {
    if (isNdfl) {
      const taxAmount = salaryValue / 100 * 13
      return `${salaryValue + taxAmount}`
    }
    return `${salaryValue}`
  }

}