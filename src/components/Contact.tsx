import { motion } from "motion/react";
import { Mail, Instagram, Youtube, BookOpen } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-8">Get in Touch</h2>
            <p className="text-lg font-light opacity-70 mb-12">
              작품 의뢰, 강의 문의, 협업 제안 등<br />
              희목의 따뜻한 감성이 필요한 곳이라면 언제든 환영합니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-ivory flex items-center justify-center group-hover:bg-brand-pink transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-40">Email</p>
                  <p className="font-medium">heemokart@naver.com</p>
                </div>
              </div>

              <div className="flex gap-4 ml-16">
                <a href="https://www.instagram.com/heemok_studio" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-brand-pink/30 hover:bg-brand-pink transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@heemok_studio" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-brand-pink/30 hover:bg-brand-pink transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://m.blog.naver.com/heemokstudio" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-brand-pink/30 hover:bg-brand-pink transition-all">
                  <BookOpen className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 bg-brand-ivory p-8 md:p-12 rounded-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-60 ml-1">Name</label>
                <input type="text" className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink outline-none transition-all" placeholder="성함" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-60 ml-1">Contact</label>
                <input type="text" className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink outline-none transition-all" placeholder="연락처" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-60 ml-1">Subject</label>
              <select className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink outline-none transition-all appearance-none">
                <option>작품 의뢰</option>
                <option>강의 문의</option>
                <option>협업 제안</option>
                <option>기타</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-60 ml-1">Message</label>
              <textarea rows={4} className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink outline-none transition-all resize-none" placeholder="문의 내용을 입력해주세요."></textarea>
            </div>
            <button className="w-full bg-brand-charcoal text-white rounded-xl py-4 font-medium hover:bg-brand-pink hover:text-brand-charcoal transition-all duration-300">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
