import { Field } from "react-final-form";
import { Flex } from "../flex";

export const Radio: React.FC<{
  name: string;
  value: string | null;
  label: string;
}> = ({
  name,
  value,
  label,
}) => {
  return <Flex>
    <Field
      name={name}
      component={"input"}
      type={"radio"}
      value={value}
    />
    <Flex margin={"0 0 0 10px"}>
      <label>{label}</label>
    </Flex>
  </Flex>
}

