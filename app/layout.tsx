// Metadata from next
import type { Metadata } from "next";
// font IBM Plex Sans
import { IBM_Plex_Sans } from "next/font/google";
// cn
import { cn } from "@/lib/utils";
// Clerk Provider
import { ClerkProvider } from "@clerk/nextjs";
// import css
import "./globals.css";

// config font IBMPlex
const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

// const metadata
export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

// func Root
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        // color primary variable
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
