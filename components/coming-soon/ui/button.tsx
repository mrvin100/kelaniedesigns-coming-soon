import { cn } from "@/lib/utils";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  display: flex;
  width: 6.9375rem;
  height: 6.9375rem;
  padding: 0.6875rem 0.625rem 0.625rem 0.6875rem;
  justify-content: center;
  align-items: center;
  
  color: #ff3e24;
`;
const StyledButton = styled.button`
  display: flex;
  width: 5.625rem;
  height: 5.625rem;
  padding: 0.625rem 1.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  aspect-ratio: 1/1;

  border-radius: 6.25rem;
  border: 1.5px solid #ff3e24;
`;

const StyledButtonText = styled.span`
  color: #ff3e24;
  text-align: center;
  font-family: Roboto;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 120% */
  letter-spacing: 0.1875rem;
`;

interface Props {
  text?: string;
  className?: string;
}

const Button = ({ text, className }: Readonly<Props>) => {
  return (
    <StyledButtonContainer className={cn("", className)}>
      <StyledButton>
        <StyledButtonText>{text ?? "JOIN US"}</StyledButtonText>
      </StyledButton>
    </StyledButtonContainer>
  );
};

export default Button;
