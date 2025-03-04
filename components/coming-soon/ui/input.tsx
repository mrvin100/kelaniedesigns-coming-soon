import { cn } from "@/lib/utils";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: "newsletter";
}

const StyledInput = styled.input<{ variant?: "newsletter" }>`
  ${({ variant }) =>
    variant === "newsletter" &&
    `
    border: 1px solid #ffb1a6;
    background: rgba(255, 168, 156, 0.2);
    color: rgba(255, 192, 184, 0.8);
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.125rem;
    letter-spacing: 0.2rem;
    height: 3.75rem;
    border-radius: 12.5rem;
    padding: 1.37rem;

    &::placeholder {
      color: rgba(255, 192, 184, 0.8);
    }
  `}
`;

export const Input = ({ className, variant, ...props }: InputProps) => {
  return (
    <StyledInput variant={variant} className={cn("", className)} {...props} />
  );
};

