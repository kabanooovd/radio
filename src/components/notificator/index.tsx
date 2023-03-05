import { Calculator } from "../../utils/calculator"
import { IState } from "../control"
import { Flex } from "../flex"

interface INotificator {
  values: IState
}

export const Notificator: React.FC<INotificator> = (props) => {
  const { values } = props
  return <Flex direction={"column"} background={"#f7ecc1"} padding={"10px"}>
    <div>
      {Calculator.calcValues(+values.salaryValue, values.isNdfl)} ₽ сотрудник будет получать на руки
    </div>
    <div>
      2323 ₽ НДФЛ, 13% от оклада
    </div>
    <div>
      2323 ₽ за сотрудника в месяц
    </div>
</Flex>
}