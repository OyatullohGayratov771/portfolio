import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">{children}</main>
      <Footer />
    </>
  );
}