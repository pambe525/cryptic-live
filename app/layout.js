import "./global.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import NavBar from "../components/navbar.js";

// Used in the mets tag
export const metadata = {
  title: "CrypticLive",
  description: "Word Puzzles for Cruciverbalists",
  icon: "/favicon.ico"
}

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
