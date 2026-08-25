import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JLPT N3 Practice",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
