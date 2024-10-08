import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/ui/layout/Navbar";
import Container from "@/components/ui/layout/Container";
import SocketProvider from "@/providers/SocketProvider";
//import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Zoom",
  description: "Video Call",
};
// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SocketProvider>
            <main className="flex flex-col min-h-screen bg-secondary">
              <Navbar />
              <Container>
                {children}
              </Container>

            </main>
          </SocketProvider>


        </body>
      </html>
    </ClerkProvider>

  );
}
