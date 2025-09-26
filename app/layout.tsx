import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "../app/Footer";
import AboveFooter from "../app/Above";
import { ThemeProvider } from "next-themes";
import { Toaster } from "../app/components/sonner";
import ChatBox from "../app/components/chatbox"

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APPortaluploads",
  description: "Apportal Uploads - Your trusted upload and tracking platform",
  icons: {
    icon: [{ url: "/apportal.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfitSans.variable} antialiased font-sans bg-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableColorScheme
          disableTransitionOnChange
        >

          {children}
          <Toaster />
        </ThemeProvider>

        <ChatBox />
        <AboveFooter />
        <Footer />
      </body>
    </html>
  );
}
