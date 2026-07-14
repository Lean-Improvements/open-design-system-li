/* global React */
// Example SaaS dashboard screen. Stat cards + a data table built on the template.

const STATS = [
  { label: "Initiatives", value: "18", icon: "flag", tint: "#9fbbe0" },
  { label: "Active epics", value: "7", icon: "crown", tint: "#f54e00" },
  { label: "OKR progress", value: "64%", icon: "target", tint: "#9fc9a2" },
  { label: "Features", value: "42", icon: "trophy", tint: "#c0a8dd" },
];

const EPICS = [
  { name: "Automate CSV import pipeline", team: "Platform", status: "On track", progress: 78 },
  { name: "Roadmap dependency graph", team: "Product", status: "In progress", progress: 45 },
  { name: "OKR quarterly rollups", team: "Insights", status: "On track", progress: 90 },
  { name: "Sprint capacity planner", team: "Delivery", status: "Blocked", progress: 22 },
];

function StatCard({ s }) {
  return (
    <div style={{ background: "var(--lp-surface)", border: "1px solid var(--lp-line)", borderRadius: 28, padding: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div style={{ width: 44, height: 44, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: s.tint + "22" }}>
          <i data-lucide={s.icon} style={{ width: 18, height: 18, color: s.tint === "#f54e00" ? "var(--lp-primary)" : s.tint }} />
        </div>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--lp-muted)" }}>{s.label}</span>
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--lp-ink)" }}>{s.value}</div>
    </div>
  );
}

function ProgressBar({ value, blocked }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 120 }}>
      <div style={{ flex: 1, height: 6, background: "var(--lp-surface-alt)", borderRadius: 9999, overflow: "hidden" }}>
        <div style={{ height: "100%", width: value + "%", borderRadius: 9999, background: blocked ? "var(--lp-error)" : "var(--lp-primary)" }} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color: "var(--lp-body)", width: 32, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{value}%</span>
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    "On track": { bg: "var(--lp-surface-alt)", fg: "var(--lp-ink)", bd: "var(--lp-line-strong)" },
    "In progress": { bg: "var(--lp-bg-soft)", fg: "var(--lp-muted)", bd: "var(--lp-line)" },
    "Blocked": { bg: "var(--lp-error-soft)", fg: "var(--lp-error)", bd: "var(--lp-error)" },
  }[status];
  return (
    <span style={{ display: "inline-flex", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", padding: "2px 8px", borderRadius: 4, background: map.bg, color: map.fg, border: "1px solid " + map.bd }}>{status}</span>
  );
}

function DashboardScreen() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <header>
        <h1 style={{ margin: "0 0 8px", fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400, letterSpacing: "-0.04em", color: "var(--lp-ink)" }}>Dashboard</h1>
        <p style={{ margin: 0, fontSize: 15, color: "var(--lp-muted)" }}>Welcome back, Jordi. Here's your workspace at a glance.</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {STATS.map((s) => <StatCard key={s.label} s={s} />)}
      </div>

      <div style={{ background: "var(--lp-surface)", border: "1px solid var(--lp-line)", borderRadius: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid var(--lp-line)" }}>
          <div>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400, letterSpacing: "-0.02em", color: "var(--lp-ink)" }}>Active epics</h2>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--lp-muted)" }}>7 epics across 4 teams this quarter</p>
          </div>
          <button style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 40, padding: "0 16px", background: "var(--lp-primary)", color: "#fff", border: "1px solid var(--lp-primary)", borderRadius: 8, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
            <i data-lucide="plus" style={{ width: 16, height: 16 }} /> New epic
          </button>
        </div>
        <div>
          {EPICS.map((e, i) => (
            <div key={e.name} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 24px", borderBottom: i < EPICS.length - 1 ? "1px solid var(--lp-line)" : "none" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--lp-ink)" }}>{e.name}</div>
                <div style={{ fontSize: 12, color: "var(--lp-muted)", marginTop: 2 }}>{e.team}</div>
              </div>
              <StatusBadge status={e.status} />
              <ProgressBar value={e.progress} blocked={e.status === "Blocked"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlaceholderScreen({ title }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 400, color: "var(--lp-muted)" }}>
      <i data-lucide="layers" style={{ width: 40, height: 40, marginBottom: 16, opacity: 0.5 }} />
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 400, letterSpacing: "-0.03em", color: "var(--lp-ink)", margin: 0 }}>{title}</h1>
      <p style={{ marginTop: 8, fontSize: 14 }}>This view is part of the live app — shown here as a stub.</p>
    </div>
  );
}

window.DashboardScreen = DashboardScreen;
window.PlaceholderScreen = PlaceholderScreen;
