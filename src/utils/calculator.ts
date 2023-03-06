export class Calculator {
  static calcValues(salaryValue: number, isNdfl: boolean): {amount: string, percentValue: string, fullAmount: string} {
    const taxAmount = Number((salaryValue / 100 * 13).toFixed(0))
    if (isNdfl) {
      return {
        amount: `${salaryValue.toFixed(0)} ₽`,
        percentValue: `${taxAmount.toFixed(0)} ₽`,
        fullAmount: `${(salaryValue + taxAmount).toFixed(0)} ₽`,
      }
    }
    return {
      amount: `${(salaryValue - taxAmount).toFixed(0)} ₽`,
      percentValue: `${taxAmount.toFixed(0)} ₽`,
      fullAmount: `${salaryValue.toFixed(0)} ₽`,
    }
  }

}