import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/cafe/Footer";
import Navbar from "@/components/cafe/Navbar";

const playFair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montSerrat = Montserrat({
  // variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata = {
  title: "The Kinara Cafe",
  description:
    "A modern cafe experience with the best coffee and pastries in town.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playFair.variable} ${montSerrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
