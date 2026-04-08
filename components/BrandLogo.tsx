import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

const LOGO = withBasePath("/readfast-logo.jpg");

const sizesPx = { sm: 32, md: 40, lg: 64, xl: 80 } as const;

export type BrandLogoSize = keyof typeof sizesPx;

type BrandLogoProps = {
  size?: BrandLogoSize;
  /** Show “ReadFast” wordmark next to the mark */
  showWordmark?: boolean;
  /** Larger wordmark for hero-style layouts */
  wordmarkClassName?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Official app icon — black square mark with white paper-plane symbol.
 * Use everywhere the ReadFast brand appears (nav, footer, hero, CTAs).
 */
export default function BrandLogo({
  size = "md",
  showWordmark = true,
  wordmarkClassName = "",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const px = sizesPx[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={LOGO}
        alt="ReadFast"
        width={px}
        height={px}
        priority={priority}
        className="shrink-0 rounded-[22%] shadow-lg shadow-black/40 ring-1 ring-white/10"
      />
      {showWordmark && (
        <span
          className={`font-display font-bold tracking-tight text-foreground ${wordmarkClassName}`}
        >
          Read<span className="text-accent">Fast</span>
        </span>
      )}
    </div>
  );
}
