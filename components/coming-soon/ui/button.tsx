import { cn } from "@/lib/utils";
import styled from "styled-components";

interface ButtonProps {
  text?: string;
  className?: string;
  variant?: 'circle' | 'rounded';
  onClick?: () => void;
}

const BaseButtonContainer = styled.div<{ variant: 'circle' | 'rounded' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff3e24;
  
  ${({ variant }) => variant === 'circle' ? `
    width: 6.9375rem;
    height: 6.9375rem;
    padding: 0.6875rem 0.625rem 0.625rem 0.6875rem;
  ` : `
    width: 11.875rem;
    height: 4.1875rem;
    padding: 0.5rem 0.6875rem;
  `}
`;

const BaseButton = styled.button<{ variant: 'circle' | 'rounded' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 1.5px solid #ff3e24;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff3e24;
    color: white;
  }
  
  ${({ variant }) => variant === 'circle' ? `
    width: 5.625rem;
    height: 5.625rem;
    padding: 0.625rem;
    aspect-ratio: 1/1;
  ` : `
    width: 10.5rem;
    height: 3.1875rem;
    padding: 0.625rem 1.875rem;
  `}
`;

const ButtonText = styled.span`
  color: inherit;
  text-align: center;
  font-family: var(--font-roboto-mono);
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: 0.1875rem;
  text-transform: uppercase;
`;

export const Button = ({ 
  text, 
  className, 
  variant = 'circle',
  onClick 
}: Readonly<ButtonProps>) => {
  const defaultText = variant === 'circle' ? 'JOIN US' : 'SUBSCRIBE';

  return (
    <BaseButtonContainer 
      className={cn("", className)} 
      variant={variant}
    >
      <BaseButton 
        variant={variant}
        onClick={onClick}
      >
        <ButtonText>{text ?? defaultText}</ButtonText>
      </BaseButton>
    </BaseButtonContainer>
  );
};
