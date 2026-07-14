import React from "react";

/** Text input — white surface, hairline border, 8px radius, 40px tall. */
export function Input({ style, ...props }) {
  const base = {
    height: 40,
    width: "100%",
    boxSizing: "border-box",
    background: "var(--lp-surface)",
    color: "var(--lp-ink)",
    border: "1px solid var(--lp-line)",
    borderRadius: "var(--radius-md)",
    padding: "0 12px",
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    outline: "none",
    transition: "border-color .15s ease, box-shadow .15s ease",
    ...style,
  };
  return <input style={base} {...props} />;
}
