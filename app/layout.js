import "./global.css";
import Head from "next/head";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import NavBar from "../components/navbar.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
