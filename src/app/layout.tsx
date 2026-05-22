import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northern Access Floors Ltd | Raised Access Flooring Specialists",
  description:
    "Northern Access Floors Ltd are leading specialists in new and existing raised access flooring. Approved Tate agent with over 20 years' experience. Get a free quote today.",
  keywords: [
    "access floor",
    "raised access flooring",
    "raised floor",
    "data centre floor",
    "computer room floor",
    "Tate access floors",
    "Hull",
    "raised flooring contractor",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
