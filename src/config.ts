import * as uuid from "uuid"

export const ICON_DEFAULTS = {
  size: "S",
  color: "black",
}

export const CONTROL = {
  SPM: "salary-per-month",
  MS: "minimal-salary",
  SPD: "salary-per-day",
  SPH: "salary-per-hour",
}

export interface IOptions {
  id: string;
  label: string;
  name: string;
  value: string;
  info: string | null
}
export const options: IOptions[] = [
  {
    id: uuid.v4(),
    label: "Оклад за месяц",
    name: "control",
    value: CONTROL.SPM,
    info: null,
  },
  {
    id: uuid.v4(),
    label: "МРОТ",
    name: "control",
    value: CONTROL.MS,
    info: "МРОТ - минимальный размер оплаты труда. Разный для разных регионов",
  },
  {
    id: uuid.v4(),
    label: "Оплата за день",
    name: "control",
    value: CONTROL.SPD,
    info: null,
  },
  {
    id: uuid.v4(),
    label: "Оплата за час",
    name: "control",
    value: CONTROL.SPH,
    info: null,
  },
];