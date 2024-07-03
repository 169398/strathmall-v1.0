import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "../components/theme-provider";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {

  title: "Create your online shop today",
  description: "Easy and efficient buying and selling of goods on cumpus",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],

  twitter: {
    card: "summary_large_image",
    title:
      "StrathMall- create your own shop and sell goods to a large audience and at a lower cost",
    description:
      "Quickly  set-up your shop and upload the goods you are selling  to other students conviniently.",
  },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
