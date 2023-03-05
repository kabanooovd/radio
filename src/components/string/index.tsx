import styled from "styled-components";

interface IString {
  size?: string;
  color?: string;
}

export const String = styled.span<IString>`
  font-size: ${({size}) => size || "14px"};
  color: ${({color}) => color || "black"};
`