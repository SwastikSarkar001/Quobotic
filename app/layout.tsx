import type { Metadata } from "next";
import "./globals.css";
import AnimatedScroll from "@/ui/SmoothScrolling";


export const metadata: Metadata = {
  title: "Quobotic Consulting",
  description: "Quobotic Consulting is a software development company that specializes in building web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnimatedScroll>
        {children}
      </AnimatedScroll>
    </html>
  );
}
