// @lean-improvements/design-system
// Reference / prototype components (mirror the production shadcn/ui components).
// Production component code lives in each app's repo under src/components/ui.
//
// NOTE: these are React source files (.jsx). If you import them, your bundler
// must transpile this package. With Vite, allow it:
//   optimizeDeps: { exclude: ["@lean-improvements/design-system"] }
// Most teams instead consume only the theme:
//   import "@lean-improvements/design-system/styles.css";
//   import preset from "@lean-improvements/design-system/tailwind-preset";

export { Button } from "./components/core/Button.jsx";
export { Badge } from "./components/core/Badge.jsx";
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/core/Card.jsx";
export { Input } from "./components/core/Input.jsx";
export { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./components/core/Dialog.jsx";
