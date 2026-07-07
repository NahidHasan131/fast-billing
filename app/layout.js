import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Brand — Ultra Fast Fiber Internet for Your Digital Life",
  description:
    "Premium ISP service with 10 Gbps speed, unlimited data, 99.99% uptime and 24/7 support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
