import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
}

const Logo = ({
  src = "/header_logo_kelanie.svg",
  alt = "kelanie logo",
  width = 100,
  height = 100,
  className,
  imageClassName,
}: LogoProps) => {
  return (
    <Link href="/" className={cn("relative", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("w-auto h-auto", imageClassName)}
      />
    </Link>
  );
};

export default Logo;