import React from "react"
import { Button } from "react-bootstrap"
import { Form as FinalForm } from 'react-final-form'
import { CONTROL, FIELD_SIGN, IOptions } from "../../config"
import { theme } from "../../theme"
import { Calculator } from "../../utils/calculator"
import { Flex } from "../flex"
import { Hint } from "../hint"
import { Notificator } from "../notificator"
import { Radio } from "../radio"
import { String } from "../string"
import { TextField } from "../text-field"
import { ToggleField } from "../toggle"
import { ControlWrapper, Title } from "./styled"

export interface IState {
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
      render={({ handleSubmit, form: { mutators: { setValue } }, values }) => {
        
        const isMROT = values.control === CONTROL.MS
        const isSalaryPerMonth = values.control === CONTROL.SPM

        const onHandleFieldValue = (e: React.ChangeEvent<HTMLInputElement>) => {
          const regExpOnlyDigits = /^[0-9\b]+$/;
          const { value } = e.currentTarget
          if ((regExpOnlyDigits.test(value) || value === "") && value.length < 12) {
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
            {!isMROT && <>
              <Flex margin={"10px 0 10px 15px"}>
                <String color={theme.GREY} size={"14px"}>Указать с НДФЛ</String>
                <Flex margin={"0 0 0 15px"}>
                  <ToggleField formItem={"isNdfl"} />
                </Flex>
              </Flex>
              {values.control && <Flex margin={"10px 0 10px 15px"}>
                <TextField 
                  name={"salaryValue"} 
                  component={"input"}
                  onChange={onHandleFieldValue}
                  type={"text"}
                  signtext={FIELD_SIGN[values.control as keyof typeof FIELD_SIGN]}
                />
              </Flex>}
            </>}
            {values.control && isSalaryPerMonth && values.salaryValue && <Notificator values={values} />}
          </form>
        )}}
    />
  </ControlWrapper>
}
