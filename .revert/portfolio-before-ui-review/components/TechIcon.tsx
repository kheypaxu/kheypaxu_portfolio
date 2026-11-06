import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiTypescript,
  SiDart,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiSupabase,
  SiPython,
  SiSqlite,
  SiMariadb,
  SiTauri,
  SiVite,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
const logos: Record<string, { icon: IconType; color: string; mono?: boolean }> =
  {
    "Next.js": { icon: SiNextdotjs, color: "currentColor", mono: true },
    React: { icon: SiReact, color: "#087f9e" },
    Flutter: { icon: SiFlutter, color: "#1685cf" },
    TypeScript: { icon: SiTypescript, color: "#3178c6" },
    Dart: { icon: SiDart, color: "#0175c2" },
    JavaScript: { icon: SiJavascript, color: "#a88a00" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#0891b2" },
    Firebase: { icon: SiFirebase, color: "#e27a0b" },
    Supabase: { icon: SiSupabase, color: "#269b69" },
    Python: { icon: SiPython, color: "#3e83b6" },
    SQLite: { icon: SiSqlite, color: "#2384ad" },
    MariaDB: { icon: SiMariadb, color: "currentColor", mono: true },
    Tauri: { icon: SiTauri, color: "#a77a00" },
    Vite: { icon: SiVite, color: "#9b53df" },
    Git: { icon: SiGit, color: "#ef513b" },
    GitHub: { icon: SiGithub, color: "currentColor", mono: true },
    Figma: { icon: SiFigma, color: "#ad58f3" },
    "VS Code": { icon: VscVscode, color: "#1688cd" },
  };
export function TechIcon({ name }: { name: string }) {
  const logo = logos[name];
  if (!logo) throw new Error(`Missing technology logo: ${name}`);
  const Icon = logo.icon;
  return (
    <Icon
      className={`tech-logo ${logo.mono ? "mono" : ""}`}
      style={{ color: logo.color }}
      aria-hidden="true"
      focusable="false"
    />
  );
}
export const technologies = [
  ...["Next.js", "React", "Flutter", "Tailwind CSS"].map((name) => ({
    name,
    type: "Frameworks",
  })),
  ...["TypeScript", "JavaScript", "Dart", "Python"].map((name) => ({
    name,
    type: "Languages",
  })),
  ...[
    "Firebase",
    "Supabase",
    "SQLite",
    "MariaDB",
    "Tauri",
    "Vite",
    "Git",
    "GitHub",
    "Figma",
    "VS Code",
  ].map((name) => ({ name, type: "Tools" })),
];
