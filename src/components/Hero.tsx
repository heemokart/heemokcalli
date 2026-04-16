import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden hanji-texture">
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden bg-brand-ivory/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="https://picsum.photos/seed/pale-pink-roses-soft-focus/1920/1080" 
          alt="HEEMOK Calligraphy Soft Roses" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-brand-ivory"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
      </motion.div>
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-[0.3em] mb-6 block opacity-90 font-bold text-brand-charcoal">Calligraphy Artist Portfolio</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-soft mb-8 leading-[1.1] tracking-tight text-brand-charcoal font-bold">
            당신의 마음에 천천히,<br />
            깊게 스며드는 위로를 씁니다
          </h1>
          <p className="text-lg md:text-xl font-bold opacity-100 max-w-2xl mx-auto mb-12 text-brand-charcoal">
            희목(喜목)은 손끝에서 피어나는 따뜻한 감성을 붓끝에 담아<br className="hidden md:block" />
            세상에 단 하나뿐인 위로의 문장을 선물합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
