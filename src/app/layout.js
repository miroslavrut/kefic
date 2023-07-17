import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: {
      url: "logo-circle.png",
      type: "image/png",
    },
    shortcut: { url: "/logo-circle.png", type: "image/png" },
  },
  title: "Meetbusters",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} id="root">
        {children}
      </body>
    </html>
  );
}
