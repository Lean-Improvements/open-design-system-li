import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

/** Small uppercase JetBrains-Mono status badge. */
export function Badge(props: BadgeProps): JSX.Element;
