import React from "react";

/**
 * Lean Improvements primary button. Cursor-Orange default, plus secondary,
 * outline, ghost, link and destructive variants. 8px radius, hairline border.
 */
export function Button({
  variant = "default",
  size = "default",
  type = "button",
  disabled = false,
  children,
  style,
  ...props
}) {
  const sizes = {
    default: { height: 40, padding: "0 16px", fontSize: 14 },
    sm: { height: 36, padding: "0 12px", fontSize: 12 },
    lg: { height: 44, padding: "0 24px", fontSize: 14 },
    icon: { height: 40, width: 40, padding: 0, fontSize: 14 },
  };

  const variants = {
    default: { background: "var(--lp-primary)", color: "#fff", borderColor: "var(--lp-primary)" },
    secondary: { background: "var(--lp-surface)", color: "var(--lp-ink)", borderColor: "var(--lp-line-strong)" },
    outline: { background: "transparent", color: "var(--lp-ink)", borderColor: "var(--lp-line)" },
    ghost: { background: "transparent", color: "var(--lp-body)", borderColor: "transparent" },
    link: { background: "transparent", color: "var(--lp-primary)", borderColor: "transparent", textDecoration: "underline", textUnderlineOffset: 4 },
    destructive: { background: "var(--lp-error)", color: "#fff", borderColor: "var(--lp-error)" },
    ink: { background: "var(--lp-ink)", color: "var(--lp-bg)", borderColor: "var(--lp-ink)" },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    whiteSpace: "nowrap",
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    borderWidth: 1,
    borderStyle: "solid",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background-color .15s ease, border-color .15s ease, color .15s ease",
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  return (
    <button type={type} disabled={disabled} style={base} {...props}>
      {children}
    </button>
  );
}
