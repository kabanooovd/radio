import { Alert } from "react-bootstrap";
import { Calculator } from "../../utils/calculator";
import { IState } from "../control";
import { Amount, Span } from "./styled";

interface INotificator {
  values: IState
}

export const Notificator: React.FC<INotificator> = (props) => {
  const { values } = props

  const {fullAmount, amount, percentValue} = Calculator.calcValues(+values.salaryValue, values.isNdfl)

  return <Alert variant={"warning"}>
    <div>
      <Amount>{amount}</Amount>{" "}<Span>сотрудник будет получать на руки</Span>
    </div>
    <div>
      <Amount>{percentValue}</Amount>{" "}<Span>НДФЛ, 13% от оклада</Span>
    </div>
    <div>
      <Amount>{fullAmount}</Amount>{" "}<Span>за сотрудника в месяц</Span>
    </div>
  </Alert>
}
