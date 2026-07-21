import { HTMLAttributes } from "react";
import clsx from "clsx";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "md" | "lg";
  muted?: boolean;
}

export default function Text({
  size = "md",
  muted = true,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p
      className={clsx(
        "leading-relaxed",
        {
          "text-sm md:text-base": size === "sm",
          "text-base md:text-lg": size === "md",
          "text-lg md:text-xl": size === "lg",
          "text-zinc-400": muted,
          "text-white": !muted,
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}