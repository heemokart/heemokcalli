/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Gallery from "./components/Gallery";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-pink/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Gallery />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
