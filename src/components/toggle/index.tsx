import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./styled";

export const ToggleField: React.FC<{
  formItem: string;
  // margin?: string;
  // checked: boolean;
  // onChange: () => void;
}> = (props) => {
  const { formItem } = props
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox id={formItem} name={formItem} component={"input"} type={"checkbox"} />
        <CheckBoxLabel htmlFor={formItem}/>
      </CheckBoxWrapper>
    </div>
  )
}