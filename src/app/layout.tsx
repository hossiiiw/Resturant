import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/layout/MainLayout";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          precedence="default"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazir&display=swap"
          rel="stylesheet"
          precedence="default"
        />
      </head>
      <body className="bg-theme">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
