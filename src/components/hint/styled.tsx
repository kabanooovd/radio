import styled from "styled-components"

export const HintContainer = styled.div`
  position: relative;
  cursor: pointer;
`

export const Tail = styled.div`
  position: absolute;
  top: 30px;
  left: 10px;
  border: 20px solid transparent; 
  border-bottom: 20px solid #8b2e94; 
  border-left: 20px solid #8b2e94;
`

export const HintWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 10px;
  background: #8b2e94;
  color: #FFFFFF;
  padding: 10px;
  border-radius: 0 8px 8px 8px;
  z-index: 10;
  width: 300px;
`