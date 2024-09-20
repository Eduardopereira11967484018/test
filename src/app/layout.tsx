import type { Metadata } from "next";
import "./globals.css"; // Mantém os estilos globais

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "Todolist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="">
      <head>
        <link rel="icon" href="/Logomark.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
