import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider/ThemeProvider";

import clsx from "clsx";
import Header from "@/components/Header";

import "./globals.css";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rahul Yadav - Software Developer",
  description: "To be updated",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(inter.variable, spaceGrotesk.variable, "antialiased")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
