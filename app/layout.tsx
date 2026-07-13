import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rimaya | Payroll. Recruitment. Consulting.",
  description: "Helping UK businesses hire smarter. HMRC-compliant payroll, expert recruitment, and strategic consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
