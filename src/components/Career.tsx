import { motion } from "motion/react";

const careerData = [
  { 
    year: "2026", 
    title: "“글씨에 담긴 한국의 마음” 이탈리아 시에나 외국인 대학교 전시", 
    subtitle: "주최 글씨21, 한국캘리그라피연구소 소속 캘라그라피부문 전시 참여\n2026 “The Spirit of Korea Through Calligraphy\" Exhibition at the University for Foreigners of Siena, Italy",
    type: "Exhibition" 
  },
  { 
    year: "2025", 
    title: "제2회 A.UNKNOWN CODE NAME : COLOR 단체전 (삼청동)", 
    subtitle: "2025 – Participating Artist, 2nd a.unknown “CODE NAME: COLOR” Group Exhibition",
    type: "Exhibition" 
  },
  { 
    year: "2025", 
    title: "제1회 한국종합문화예술협회 공모전 캘리그래피 부문 우수상", 
    subtitle: "2025 – Excellence Award, Calligraphy Division, 1st Korea Comprehensive Culture & Arts Association Competition",
    type: "Award" 
  },
  { 
    year: "2025", 
    title: "제1회 강원석 시화 공모전 수채캘리 특선 (인사동 조형갤러리 전시)", 
    subtitle: "2025 – Special Prize, 1st Gangwonseok Calligraphy Art Contest, Republic of Korea",
    type: "Award" 
  },
  { 
    year: "2025", 
    title: "제15회 대한민국 행촌 서예대전 캘리그래피 부문 입선", 
    subtitle: "2025 – Selected Artist, 15th Hangchon Korean Calligraphy Exhibition (Calligraphy Division)",
    type: "Award" 
  },
];

export default function Career() {
  return (
    <section id="exhibition" className="py-24 px-6 bg-brand-ivory">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Exhibition & Career</h2>
          <p className="opacity-60 mb-6">작가의 발자취와 전문성을 소개합니다.</p>
          <div className="text-sm border-t border-brand-pink/20 pt-6 inline-block text-left opacity-80">
            <p className="mb-1">사회복지사 2급</p>
            <p className="mb-1">KCAA협회 수채 캘리그라피 2급</p>
            <p className="mb-1">한국캘리그라피연구소 소속</p>
          </div>
        </div>
        
        <div className="space-y-12">
          {careerData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-8 group"
            >
              <div className="w-24 pt-1">
                <span className="text-xl font-serif font-bold text-brand-pink">{item.year}</span>
              </div>
              <div className="flex-1 pb-8 border-b border-brand-pink/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-brand-pink/20 rounded text-brand-charcoal/70">
                    {item.type}
                  </span>
                </div>
                <h4 className="text-lg font-medium group-hover:text-brand-pink transition-colors">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="mt-2 text-sm opacity-50 font-light whitespace-pre-line">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
