import type { Metadata } from "next";
import "./globals.css";
import "./pink.css";
import "./refinements.css";
import "./portfolio-review.css";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ImageProtection } from "@/components/ImageProtection";
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
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}
