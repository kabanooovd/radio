import { Button } from "react-bootstrap"
import { Form as FinalForm } from 'react-final-form'
import { Flex } from "../flex"
import { Radio } from "../radio"
import { ControlWrapper, Title } from "./styled"

interface IState {
  control: string | null;
  isNdfl: boolean;
  salaryValue: string;
}

interface IControl {
  options: any[]
}

export const Control: React.FC<IControl> = (props) => {
  const { options } = props

  const onSubmit = (values: IState) => {
    console.log("==> ", values)
  }

  return <ControlWrapper>
    <Title>Сумма</Title>
    <FinalForm
      onSubmit={onSubmit}
      initialValues={{ control: null }}
      render={({ handleSubmit, form, submitting, pristine, values }) => {
        // console.log("==> ", values.control === "minimal-salary")
        return (
          <form onSubmit={handleSubmit}>
            {options.map(({id, label, name, value}) => {
              return <Radio
                key={id}
                label={label}
                name={name}
                value={value}
              />
            })}
            <Flex margin={"0 0 0 15px"}>
              sdfsdf
            </Flex>
            <Button 
              type={"submit"}
              disabled={submitting || pristine}
            >
              Submit
            </Button>
          </form>
        )}}
    />
  </ControlWrapper>
}

