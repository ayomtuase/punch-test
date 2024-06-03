import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Zwilt Design by Ayo Oguntuase",
  description: "Punch Zwilt Submission",
};

const switzer = localFont({
  src: [
    {
      path: "./fonts/Switzer-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={switzer.className}>{children}</body>
    </html>
  );
}
