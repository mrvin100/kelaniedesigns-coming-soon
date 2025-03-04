import { cn } from "@/lib/utils";

interface SectionBackgroundProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const SectionBackground = ({ children, className }: SectionBackgroundProps) => {
    return (
      <div
        className={cn(
          "relative bg-gradient-to-r from-[#313131] to-[#121212]",
          className
        )}
        style={{
          background: `
            linear-gradient(
              111deg,
              rgba(50, 50, 50, 0) 42.32%,
              #131313 85.68%
            ),
            url("/hg_background.jpg") lightgray 50% / cover no-repeat
          `,
          backgroundBlendMode: "normal, multiply"
        }}
      >
        {children}
      </div>
    );
  };
