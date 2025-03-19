import "./global.css";
import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
