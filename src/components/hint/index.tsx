import React from "react"
import { Icon } from "../icon"
import { HintContainer, HintWrapper, Tail } from "./styled"

interface IHint {
  info: string
}

export const Hint: React.FC<IHint> = (props) => {
  const { info } = props

  const [show, setWhow] = React.useState(false)

  const onMouseMoveHandler = () => {
    setWhow(true)
  }

  const onCloseHintHandler = () => {
    setWhow(false)
  }

  return <HintContainer>
    {!show && <div onMouseEnter={onMouseMoveHandler}>
      <Icon iconName={"info"} color={"grey"} size={"S"}/>
    </div>}
    {show && <div onClick={onCloseHintHandler}>
      <Icon iconName={"close"} color={"grey"} size={"S"}/>
    </div>}
    {show && <>
      <Tail />
      <HintWrapper>  
        {info}
      </HintWrapper>
    </>}
  </HintContainer>
}