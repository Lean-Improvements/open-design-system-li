import React from "react";

/**
 * Modal dialog — Radix-style. Ink overlay at 25% + 2px blur, white card with a
 * 1px hairline, 8px radius, 24px padding, top-right close. Compose with
 * DialogHeader / DialogTitle / DialogDescription / DialogFooter.
 *
 * `open` controls visibility; `onClose` fires on backdrop click or the X.
 */
export function Dialog({ open = true, onClose, children, width = 512 }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(38,37,30,0.25)", backdropFilter: "blur(2px)", padding: "var(--space-base)" }}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", width: "100%", maxWidth: width, display: "flex", flexDirection: "column", gap: "var(--space-base)", background: "var(--lp-surface)", color: "var(--lp-ink)", border: "1px solid var(--lp-line)", borderRadius: "var(--radius-md)", boxShadow: "none", padding: "var(--space-lg)" }}
      >
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close"
            style={{ position: "absolute", right: 16, top: 16, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", borderRadius: "var(--radius-sm)", color: "var(--lp-muted)", cursor: "pointer", opacity: 0.7 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children, style, ...props }) {
  return <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }} {...props}>{children}</div>;
}

export function DialogTitle({ children, style, ...props }) {
  return <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--lp-ink)", ...style }} {...props}>{children}</h2>;
}

export function DialogDescription({ children, style, ...props }) {
  return <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "var(--lp-muted)", ...style }} {...props}>{children}</p>;
}

export function DialogFooter({ children, style, ...props }) {
  return <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-xs)", ...style }} {...props}>{children}</div>;
}
