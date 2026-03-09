import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goodlett Property Concierge | Simplify Home Care",
  description: "Trusted for over 30 years in home maintenance. For $95/month, we manage all your property care needs in Louisville, Kentucky.",
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
