import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Next.js Application",
  description: "Application with dark background",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
