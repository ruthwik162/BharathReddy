import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "Mulli Bharath Reddy ",
  description: "Socail Media Marketer, Growth Strategist, and Content Creator. I help brands scale their social presence and drive growth through innovative strategies and compelling content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
