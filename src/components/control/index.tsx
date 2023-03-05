import React from "react"
import { Button } from "react-bootstrap"
import { Form as FinalForm } from 'react-final-form'
import { IOptions } from "../../config"
import { theme } from "../../theme"
import { Flex } from "../flex"
import { Hint } from "../hint"
import { Radio } from "../radio"
import { String } from "../string"
import { TextField } from "../text-field"
import { ToggleField } from "../toggle"
import { ControlWrapper, Title } from "./styled"

interface IState {
  control: string | null;
  isNdfl: boolean;
  salaryValue: string;
}

interface IControl {
  options: IOptions[]
}

export const Control: React.FC<IControl> = (props) => {
  const { options } = props


  const onSubmit = (values: IState) => {
    window.alert(JSON.stringify(values))
  }

  return <ControlWrapper>
    <Title>Сумма</Title>
    <FinalForm
      mutators={{ 
        setValue: ([field, value], state, { changeValue }) => {
          changeValue(state, field, () => value)
        },
      }}
      onSubmit={onSubmit}
      initialValues={{ control: null, isNdfl: false, salaryValue: "" }}
      render={({ handleSubmit, form: { mutators: { setValue } }, submitting, pristine, values }) => {
        const onHandleFieldValue = (e: React.ChangeEvent<HTMLInputElement>) => {
          const rExp = /^[0-9\b]+$/;
          const { value } = e.currentTarget
          if (rExp.test(value) || value === "") {
            setValue("salaryValue", value)
          }
        }
        return (
          <form onSubmit={handleSubmit}>
            {options.map(({id, label, name, value, info}) => {
              return <Flex key={id} margin={"10px 0"}> 
                <Radio
                  label={label}
                  name={name}
                  value={value}
                />
                {info && <Flex margin={"0 0 0 10px"}>
                  <Hint info={info} />
                </Flex>}
              </Flex>
            })}
            <Flex margin={"10px 0 10px 15px"}>
              <String color={theme.GREY} size={"14px"}>Указать с НДФЛ</String>
              <Flex margin={"0 0 0 15px"}>
                <ToggleField formItem={"isNdfl"} />
              </Flex>
            </Flex>
            <Flex margin={"10px 0 10px 15px"}>
              <TextField 
                name={"salaryValue"} 
                component={"input"}
                onChange={onHandleFieldValue}
                type={"text"}
                signtext={"₽"}
              />
            </Flex>
            <Flex direction={"column"} background={"#f7ecc1"} padding={"10px"}>
              <div>
                2323 ₽ сотрудник будет получать на руки
              </div>
              <div>
                2323 ₽ НДФЛ, 13% от оклада
              </div>
              <div>
                2323 ₽ за сотрудника в месяц
              </div>
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
