import styled from "styled-components";
import { Control } from "./components"


const options = [
  {
    id: "1",
    label: "Оклад за месяц",
    name: "control",
    value: "salary-per-month",
  },
  {
    id: "2",
    label: "МРОТ",
    name: "control",
    value: "minimal-salary",
  },
  {
    id: "3",
    label: "Оплата за день",
    name: "control",
    value: "salary-per-day",
  },
  {
    id: "4",
    label: "Оплата за час",
    name: "control",
    value: "salary-per-hour",
  },
  
];

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Root: React.FC<{}> = () => {
  return <AppWrapper>
    <Control options={options} />
  </AppWrapper>
}