import type { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement>;

export const Badge: FC<Props> = ({ children, ...props }) => {
  return (
    <span
      className="bg-muted text-xs text-foreground rounded-full px-2 py-1 font-sans"
      {...props}
    >
      {children}
    </span>
  );
};
