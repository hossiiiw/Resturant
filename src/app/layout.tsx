import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hossein Resturant",
  description: "رستوران بین المللی حسین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
