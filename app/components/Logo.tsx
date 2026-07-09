import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const sizeMap = {
  sm: { width: 120, height: 32 },
  md: { width: 150, height: 40 },
  lg: { width: 180, height: 48 },
};

export default function Logo({ className = "", size = "md", variant = "dark" }: LogoProps) {
  const { width, height } = sizeMap[size];
  const src = variant === "light" ? "/setanjang-putih.svg" : "/setanjang.svg";

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none focus:outline-none ${className}`}
      aria-label="Setanjang Home"
    >
      <Image
        src={src}
        alt="Setanjang Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </Link>
  );
}
