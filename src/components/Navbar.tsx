import { motion } from "motion/react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Exhibition", href: "#exhibition" },
  { name: "Calligraphy", href: "#gallery" },
  { name: "BI/CI", href: "#bici" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-ivory/80 backdrop-blur-md border-b border-brand-pink/20"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="text-3xl font-serif font-bold tracking-tighter">희목</span>
          <span className="text-lg font-serif opacity-60">HEEMOK</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-brand-pink transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <button className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-brand-charcoal mb-1.5"></div>
          <div className="w-6 h-0.5 bg-brand-charcoal mb-1.5"></div>
          <div className="w-6 h-0.5 bg-brand-charcoal"></div>
        </button>
      </div>
    </motion.nav>
  );
}
