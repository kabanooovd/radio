import { Sign, StyledTextField, TextFieldContainer } from "./styled";

interface ITextField {
  name: string;
  component: string;
  type: string;
  signtext?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<ITextField> = (props) => {
  const { signtext } = props
  return <TextFieldContainer>
    {signtext && <Sign>{signtext}</Sign>}
    <StyledTextField {...props}/>
  </TextFieldContainer>
}