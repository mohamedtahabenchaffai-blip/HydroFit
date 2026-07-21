import { HTMLAttributes } from "react";
import clsx from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  blur?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  blur = true,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5",
        blur && "backdrop-blur-xl",
        hover &&
          "transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(59,130,246,.25)]",
        className
      )}
      {...props}
    >
      {/* Blue Glow */}
      <div className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );
}