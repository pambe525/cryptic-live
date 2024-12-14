import "./global.css";
import Header from "../components/layout/header.js";
import Footer from "../components/layout/footer.js";

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
