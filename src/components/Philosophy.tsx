import { motion } from "motion/react";

export default function Philosophy() {
  return (
    <section className="py-24 px-6 bg-brand-ivory">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-brand-soft-pink border border-brand-pink/30 rounded-[3rem] p-12 md:p-20 text-left shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-pink/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          
          <div className="mb-12 rounded-2xl overflow-hidden h-48 md:h-64">
            <img 
              src="https://picsum.photos/seed/soft-pastel-flower-macro/1200/600" 
              alt="Soft Pastel Flower Detail" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>

          <h3 className="text-xl font-serif font-bold mb-6 text-brand-charcoal">HEEMOK's Philosophy: 마음을 보듬는 정갈한 여백</h3>
          
          <p className="text-brand-pink font-black text-lg mb-12 border-l-4 border-brand-pink pl-4 py-2 bg-brand-pink/5">
            희목(HEEMOK)은 '기쁨이 머무는 나무'라는 뜻으로<br />
            우리네 삶에 조금이나마 소소한 기쁨이 머물기를 바라는 작가의 마음이 담겨있습니다.
          </p>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-lg font-bold font-serif">1. 소통하는 글씨 (Communication)</h4>
              <p className="text-brand-charcoal/80 leading-relaxed">
                사회복지사로서 사람의 마음을 헤아리며, 내면을 따뜻하게 안아줄 수 있는 진정성 있는 문장을 씁니다.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-bold font-serif">2. 여백의 미학 (Emptiness & Filling)</h4>
              <p className="text-brand-charcoal/80 leading-relaxed">
                비움으로써 채워지는 마음의 공간(여백)을 중요하게 생각합니다. 그곳에 비로소 당신의 이야기가 담깁니다.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-bold font-serif">3. 일상의 회복 (Restoration)</h4>
              <p className="text-brand-charcoal/80 leading-relaxed">
                ‘손끝에서 피어나는 꽃’처럼, 바쁜 일상 속에서 잠시 멈추어 자신을 돌보는 시간을 제안합니다. 작은 붓질 하나가 불안을 녹이고, 당신의 하루에 부드러운 평온함을 선물하기를 바랍니다.
              </p>
            </div>
            
            <div className="w-12 h-px bg-brand-pink my-8"></div>
            
            <p className="text-xl font-serif italic text-brand-pink font-black">
              “천천히, 그리고 깊게. 마음이 머무는 자리에 희목의 글씨를 놓습니다.”
            </p>
          </div>
          
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-pink/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
