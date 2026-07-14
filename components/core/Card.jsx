import React from "react";

/**
 * Card surface — white-on-cream with a 1px hairline and NO shadow.
 * `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
 * compose the standard internal rhythm.
 */
export function Card({ children, style, ...props }) {
  const base = {
    background: "var(--lp-surface)",
    color: "var(--lp-ink)",
    border: "1px solid var(--lp-line)",
    borderRadius: "var(--radius-md)",
    boxShadow: "none",
    ...style,
  };
  return (
    <div style={base} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, style, ...props }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: 24, ...style }} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, style, ...props }) {
  return (
    <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.2, color: "var(--lp-ink)", ...style }} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, style, ...props }) {
  return (
    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "var(--lp-muted)", ...style }} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, style, ...props }) {
  return (
    <div style={{ padding: "0 24px 24px", ...style }} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, style, ...props }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 24px 24px", ...style }} {...props}>
      {children}
    </div>
  );
}
