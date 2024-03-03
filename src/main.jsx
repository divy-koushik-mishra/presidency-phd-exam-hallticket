import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <main className="bg-[url('/bg-img-2.jpg')] bg-no-repeat bg-cover  text-white">
    <Navbar />
    <App />
    <Footer />
  </main>
);
