import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Businesses from "./pages/Businesses";
import Channels from "./pages/Channels";
import Notes from "./pages/Notes";
import Contact from "./pages/Contact";
import TelegramChannel from "./pages/channels/TelegramChannel";
import YoutubeChannel from "./pages/channels/YoutubeChannel";
import InstagramChannel from "./pages/channels/InstagramChannel";

export default function App() {
  return (
      <div className="min-h-screen bg-base-light text-text-primary dark:bg-[#000000] dark:text-neutral-100 transition-colors duration-300">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/channels" element={<Channels />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/channels/telegram" element={<TelegramChannel />} />
            <Route path="/channels/youtube" element={<YoutubeChannel />} />
            <Route path="/channels/instagram" element={<InstagramChannel />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
  );
}
