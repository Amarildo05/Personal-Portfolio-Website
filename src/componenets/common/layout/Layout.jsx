import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Content for the current route */}
      </main>
      <Footer />
    </div>
  );
}