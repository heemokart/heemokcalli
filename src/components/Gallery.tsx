import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = ["All", "Watercolor", "Digital", "Traditional", "BI/CI"];

const projects = [
  { id: 1, category: "Watercolor", title: "봄의 위로", image: "https://storage.googleapis.com/static-content-ais/2026-04-15/14-53-07/IMG_3.jpg" },
  { id: 3, category: "Traditional", title: "묵향의 깊이", image: "https://storage.googleapis.com/static-content-ais/2026-04-15/14-53-07/IMG_1.jpg" },
  { id: 4, category: "BI/CI", title: "Portfolio", image: "https://storage.googleapis.com/static-content-ais/2026-04-15/14-53-07/IMG_4.jpg" },
  { id: 5, category: "Watercolor", title: "여름의 기억", image: "https://storage.googleapis.com/static-content-ais/2026-04-15/14-53-07/IMG_5.jpg" },
  { id: 6, category: "Digital", title: "오늘의 응원", image: "https://picsum.photos/seed/digital2/600/800" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Portfolio</h2>
          <p className="opacity-60">희목의 다양한 작품 세계를 만나보세요.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-brand-charcoal text-white" 
                : "bg-brand-ivory hover:bg-brand-pink/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-brand-ivory">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.id}/600/800`;
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <span className="text-xs uppercase tracking-widest mb-2 block opacity-80">{project.category}</span>
                      <h4 className="text-xl font-serif">{project.title}</h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
