import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Monoton, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monoton",
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-redhat-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Welcome to Celsius",
  description: "Welcome to Celsius",
};

// app/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning // ← Add this here (or keep it if already present)
    >
      <body
        className={`${monoton.variable} ${redHatDisplay.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
