import type { Metadata } from "next";
import "./globals.css";
import AnimatedScroll from "@/ui/SmoothScrolling";
import { Toaster } from 'sonner'


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
      <Toaster position='top-right' theme="dark" closeButton duration={6000} />
    </html>
  );
}
