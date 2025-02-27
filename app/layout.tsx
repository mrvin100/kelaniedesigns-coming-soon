import type { Metadata } from "next";
import { Fraunces, Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400"],
});

const monsterrat = Montserrat({
  variable: "--font-monsterrat",
  subsets: ["latin"],
  weight: ["400"],
});
const roboto_mono = Roboto_Mono({
  variable: "--font-roboto_mono",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});
export const metadata: Metadata = {
  title: "Kelanie Designs",
  description: "Unleash Your Bold and Create Your Own Style with Kelanie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_mono.variable} ${fraunces.variable} ${monsterrat.variable} antialiased`}
      >
        {children}
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
