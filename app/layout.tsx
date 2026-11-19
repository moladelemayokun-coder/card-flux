
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "CARD FLUX | Where Gift Cards Move",
    template: "%s | CARD FLUX",
  },
  description:
    "Buy, sell and exchange gift cards seamlessly. Welcome to CARD FLUX, where gift cards move.",
  applicationName: "CARD FLUX",
  keywords: [
    "Card Flux",
    "Gift Cards",
    "Buy Gift Cards",
    "Sell Gift Cards",
    "Gift Card Exchange",
    "Digital Marketplace",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071426",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
