import "./global.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

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
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
