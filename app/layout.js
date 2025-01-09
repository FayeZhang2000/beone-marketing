import "./styles/globals.css";
import { Header } from "./components/header";
import Footer from "./components/Footer";
import TestPage from "./about/page";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
