import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <ScrollToTop />
        <Outlet /> {/* Content for the current route */}
      </main>
      <Footer />
    </div>
  );
}