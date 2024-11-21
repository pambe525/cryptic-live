import RootLayout from "../app/layout";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import NavBar from "../components/navbar.js";


export default function App({ Component, props }) {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Component {...props} />
      <Footer />
    </div>
  )
}