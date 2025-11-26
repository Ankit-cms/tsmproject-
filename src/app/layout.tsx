// app/layout.tsx
import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import CustomThemeProvider from "@/providers/ThemeProvider";

const almarai = Almarai({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: "TMS Solutions - Transport Management System",
  description:
    "Cloud-based SaaS TMS and visibility platform for efficient transportation logistics",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={almarai.variable}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
