import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "videsh",
  description: "videsh's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} min-h-screen bg-background overflow-x-hidden`}>
        <Navbar />
        <main className="px-4 md:px-12 font-sans relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
