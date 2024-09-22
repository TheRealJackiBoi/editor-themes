import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation/navbar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Editor Themes",
  description: "Find your theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Providers>
            <NavBar />
            {children}
        </Providers>
      </body>
    </html>
  );
}
