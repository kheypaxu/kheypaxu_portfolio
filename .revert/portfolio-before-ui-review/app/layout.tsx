import type { Metadata } from "next";
import "./globals.css";
import "./pink.css";
import "./refinements.css";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "@/components/SmoothScroll";
export const metadata: Metadata = {
  title: "Nicole Khey Bengaora — kheypaxu",
  description:
    "The development portfolio of Nicole Khey Bengaora. Explore web, mobile, and thoughtful digital experiences.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
