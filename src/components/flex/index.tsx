import styled from "styled-components";

export const Flex = styled.div<{
  direction?: "row" | "column";
  justify?: "center" | "space-between" | "space-around" | "flex-end" | "flex-start" | "none";
  align?: "center" | "space-between" | "space-around" | "flex-end" | "flex-start" | "none";
  margin?: string;
	padding?: string;
  border?: string;
  brad?: string;
  wrap?: string;
  width?: string;
  height?: string;
}>`
  width: ${({width}) => width || "auto"};
  height: ${({height}) => height || "auto"};
  display: flex;
  flex-direction: ${({direction}) => direction || "row"};
	align-items: ${({align}) => align || "stretch"};
	justify-content: ${({justify}) => justify || "stretch"};
  border: ${({border}) => border || "none"};
  margin: ${({margin}) => margin || "0"};
	padding: ${({padding}) => padding || "0"};
  border-radius: ${({brad}) => brad || "0"};
  flex-wrap: ${({wrap}) => wrap || "nowrap"};
`