export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-brand-ivory border-t border-brand-pink/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-serif font-bold mb-2">HEEMOK</h2>
          <p className="text-xs opacity-40 uppercase tracking-widest">© 2026 HEEMOK Calligraphy. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-xs uppercase tracking-widest opacity-60">
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm font-light opacity-60">
            천천히, 깊게 스며드는 위로를 씁니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
