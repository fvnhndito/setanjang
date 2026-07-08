import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { width: 120, height: 32 },
  md: { width: 150, height: 40 },
  lg: { width: 180, height: 48 },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { width, height } = sizeMap[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none focus:outline-none ${className}`}
      aria-label="Setanjang Home"
    >
      <Image
        src="/setanjang.svg"
        alt="Setanjang Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </Link>
  );
}
