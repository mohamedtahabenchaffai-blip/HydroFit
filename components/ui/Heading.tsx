import { HTMLAttributes } from "react";
import clsx from "clsx";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  gradient?: boolean;
}

export default function Heading({
  as: Tag = "h2",
  gradient = false,
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={clsx(
        "font-bold tracking-tight leading-tight",
        {
          "text-5xl md:text-6xl lg:text-7xl": Tag === "h1",
          "text-4xl md:text-5xl lg:text-6xl": Tag === "h2",
          "text-3xl md:text-4xl": Tag === "h3",
          "text-2xl md:text-3xl": Tag === "h4",
          "bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent":
            gradient,
          "text-white": !gradient,
        },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}