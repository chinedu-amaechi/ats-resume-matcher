import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume Matcher - ATS Optimization Tool",
  description:
    "Match your resume with job descriptions to bypass ATS systems and land more interviews",
  keywords:
    "resume matcher, ats, applicant tracking system, job application, resume optimization, keyword matching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-off-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
