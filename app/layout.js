import "@fontsource/poppins";
import "@fontsource/poppins/700.css";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimationTrail } from "./components/ui/animation-trail";

export const metadata = {
  title: "videsh",
  description: "videsh's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        {/* <AnimationTrail /> */}
        <main className="px-4 md:px-12 font-sans relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
