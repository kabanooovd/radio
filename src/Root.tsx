import styled from "styled-components";
import { Control } from "./components"
import { options } from "./config";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Root: React.FC<{}> = () => {
  return <AppWrapper>
    <Control options={options} />
  </AppWrapper>
}