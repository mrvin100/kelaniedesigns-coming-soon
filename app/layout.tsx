import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/providers/providers";

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
      <body className={`antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
