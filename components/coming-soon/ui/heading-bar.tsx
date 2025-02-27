import { cn } from "@/lib/utils";
import styled from "styled-components";

const StyledBarContainer = styled.div`
  width: 0rem;
  height: 0rem;
  background: white;
  stroke-width: 1.5px;
  stroke: #ff3e24;
`;
const StyledBar = styled.svg``;

interface Props {
  className?: string;
  styledBar?: string;
  svgWidth?: string;
  svgHeight?: string;
  strokeWidth?: string;
  stroke?: string;
}
const HeadingBar = ({ className, styledBar, svgWidth, svgHeight, stroke, strokeWidth }: Readonly<Props>) => {
  return (
    <StyledBarContainer className={cn("", className)}>
      <StyledBar className={cn("", styledBar)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={svgWidth ?? "287"}
          height={svgHeight ?? "2"}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          fill="none"
        >
          <path
            d="M287 1L0 0.999987"
            stroke={stroke ?? "#FF3E24"}
            strokeWidth={strokeWidth ?? "2"}
          />
        </svg>
      </StyledBar>
    </StyledBarContainer>
  );
};

export default HeadingBar;
