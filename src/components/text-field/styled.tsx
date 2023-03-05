import { Field } from "react-final-form"
import styled from "styled-components"

export const Sign = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
`

export const TextFieldContainer = styled.div`
  position: relative;
`

export const StyledTextField = styled(Field)`
  outline:none;
  height: 40px;
  border-radius: 20px;
  padding: 0 0 0 10px;
  font-size: 16px;
  border: 1px solid grey;
`