import "./globals.css";
import type { Metadata } from "next";

import CustomCursor from "@/components/cursor/CustomCursor";
import ScrollProgress from "@/components/progress/ScrollProgress";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://hydrofit.com"),

  title: {
    default: "HydroFit",
    template: "%s | HydroFit",
  },

  description:
    "Premium fitness water bottle designed for athletes, gym lovers and active lifestyles.",

  keywords: [
    "HydroFit",
    "Water Bottle",
    "Gym Bottle",
    "Fitness",
    "Sports",
    "Workout",
    "Premium Bottle",
  ],

  authors: [
    {
      name: "HydroFit",
    },
  ],

  creator: "HydroFit",

  openGraph: {
    title: "HydroFit",
    description:
      "Premium fitness water bottle designed for athletes.",
    url: "https://hydrofit.com",
    siteName: "HydroFit",

    images: [
      {
        url: "/images/bottle.png",
        width: 1200,
        height: 630,
        alt: "HydroFit Bottle",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HydroFit",
    description:
      "Premium fitness water bottle.",
    images: ["/images/bottle.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}