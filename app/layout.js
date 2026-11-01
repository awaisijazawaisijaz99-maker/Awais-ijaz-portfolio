
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Awais Ijaz | Frontend Developer",
  description: "Portfolio of Awais Ijaz, a frontend developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
