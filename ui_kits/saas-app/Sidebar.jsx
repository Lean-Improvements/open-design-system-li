/* global React */
// Lean Improvements SaaS — example app sidebar. Brand mark, editorial nav, user.
const { useState } = React;

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "layout-dashboard" },
  { id: "okrs", label: "OKRs", icon: "target" },
  { id: "epics", label: "Epics", icon: "crown" },
  { id: "features", label: "Features", icon: "trophy" },
  { id: "roadmaps", label: "Roadmaps", icon: "milestone" },
  { id: "settings", label: "Settings", icon: "settings" },
];

function Sidebar({ active, onNavigate }) {
  return (
    <aside
      className="app-surface"
      style={{ width: 256, height: "100%", display: "flex", flexDirection: "column", borderRight: "1px solid var(--lp-line)", borderTop: "none", borderBottom: "none", borderLeft: "none" }}
    >
      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "20px", borderBottom: "1px solid var(--lp-line)" }}>
        <div className="editorial-brand-mark" style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <div className="editorial-brand-diamond" style={{ width: 14, height: 14 }} />
        </div>
        <div>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--lp-ink)" }}>Lean Improvements</h1>
          <p className="editorial-panel-label" style={{ margin: "6px 0 0", color: "var(--lp-muted)" }}>SaaS Template</p>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "20px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
        {NAV.map((item) => (
          <a
            key={item.id}
            href="#"
            className="editorial-nav-item"
            data-active={active === item.id}
            onClick={(e) => { e.preventDefault(); onNavigate(item.id); }}
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", textDecoration: "none" }}
          >
            <i data-lucide={item.icon} style={{ width: 20, height: 20 }} />
            {item.label}
          </a>
        ))}
      </nav>

      {/* User */}
      <div style={{ borderTop: "1px solid var(--lp-line)", padding: 16, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 9999, background: "var(--lp-surface-alt)", border: "1px solid var(--lp-line)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: "var(--lp-ink)" }}>JM</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--lp-ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Jordi Martí</div>
          <div style={{ fontSize: 11, color: "var(--lp-muted)" }}>hola@leanimprovements.es</div>
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
