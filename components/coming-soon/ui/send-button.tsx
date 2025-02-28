import { cn } from "@/lib/utils";
import styled from "styled-components";

const StyledSendButtonContainer = styled.div`
  display: flex;
  width: 11.875rem;
  height: 4.1875rem;
  padding: 0.5rem 0.6875rem;
  justify-content: center;
  align-items: center;
  
`;
const StyledSendButton = styled.button`
  display: flex;
  width: 10.5rem;
  height: 3.1875rem;
  padding: 0.625rem 1.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  
  border-radius: 6.25rem;
  border: 1.5px solid #ff3e24;
`;

const StyledSendButtonText = styled.span`
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

const SendButton = ({ text, className }: Readonly<Props>) => {
  return (
    <StyledSendButtonContainer className={cn("", className)}>
      <StyledSendButton>
        <StyledSendButtonText>{text ?? "SUBCRIBE"}</StyledSendButtonText>
      </StyledSendButton>
    </StyledSendButtonContainer>
  );
};

export default SendButton;
