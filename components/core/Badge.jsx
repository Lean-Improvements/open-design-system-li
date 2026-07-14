import React from "react";

/**
 * Small uppercase mono badge. 4px radius, hairline border.
 * Variants: default (alt surface), secondary (soft), destructive, outline.
 */
export function Badge({ variant = "default", children, style, ...props }) {
  const variants = {
    default: { background: "var(--lp-surface-alt)", color: "var(--lp-ink)", borderColor: "var(--lp-line-strong)" },
    secondary: { background: "var(--lp-bg-soft)", color: "var(--lp-muted)", borderColor: "var(--lp-line)" },
    destructive: { background: "var(--lp-error-soft)", color: "var(--lp-error)", borderColor: "var(--lp-error)" },
    outline: { background: "transparent", color: "var(--lp-ink)", borderColor: "var(--lp-line)" },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    padding: "2px 8px",
    borderRadius: "var(--radius-xs)",
    borderWidth: 1,
    borderStyle: "solid",
    ...variants[variant],
    ...style,
  };

  return (
    <span style={base} {...props}>
      {children}
    </span>
  );
}
