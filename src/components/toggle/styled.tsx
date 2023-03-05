import { Field } from "react-final-form";
import styled from "styled-components";


export const CheckBoxWrapper = styled.div`
  position: relative;
`
export const CheckBoxLabel = styled.label<{}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 24px;
  border-radius: 15px;
  background: white;
  border: 1px solid ${({theme}) => theme.GREY};
  cursor: pointer;
  &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 17px;
      height: 17px;
      margin: 3px;
      background: ${({theme}) => theme.GREY};
      transition: 0.2s;
  }
`;
export const CheckBox = styled(Field)`
 opacity: 0;
 z-index:1;
 border-radius: 15px;
 width: 40px;
 height: 24px;
&:checked + ${CheckBoxLabel} {
 border: 2px solid ${({theme}) => theme.ORANGE};
 &::after {
     content: "";
     display: block;
     border-radius: 50%;
     width: 17x;
     height: 17x;
     margin: 2px 2px 2px 17px;
     background: ${({theme}) => theme.ORANGE};
     transition: .2s;
 }
}
`;

