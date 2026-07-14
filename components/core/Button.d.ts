import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `default` is the scarce Cursor-Orange CTA. */
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive" | "ink";
  /** Control height. `icon` is a 40×40 square. */
  size?: "default" | "sm" | "lg" | "icon";
}

/**
 * The Lean Improvements SaaS button primitive.
 * @startingPoint section="Core" subtitle="Cursor-Orange CTA + variants" viewport="700x140"
 */
export function Button(props: ButtonProps): JSX.Element;
