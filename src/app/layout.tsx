import type { Metadata } from "next";
import localFont from "next/font/local";
import "animate.css";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { GTMPixelContextProvider } from "@/utils/pixel.context";

const gilmerFont = localFont({
  variable: "--font-gilmer",
  src: [
    {
      path: "../../public/fonts/gilmer/gilmer_regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilmer/gilmer_medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilmer/gilmer_medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilmer/gilmer_bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilmer/gilmer_heavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
});
const helveticaNowDisplayFont = localFont({
  variable: "--font-helvetica-display",
  src: [
    {
      path: "../../public/fonts/helvetica_now_display/helvetica_now_display_regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/helvetica_now_display/helvetica_now_display_medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/helvetica_now_display/helvetica_now_display_bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/helvetica_now_display/helvetica_now_display_extra_bold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Zatiqeasy",
  description: "Zatiqeasy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <GTMPixelContextProvider />
      <body className={`${gilmerFont.variable}  ${helveticaNowDisplayFont.variable}  antialiased max-w-[100vw] overflow-x-clip`}>
        <Nav />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
