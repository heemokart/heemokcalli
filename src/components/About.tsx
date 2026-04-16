import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">
            마음을 쓰는 캘리그라퍼,<br />
            <span className="text-brand-pink italic font-black">희목(HEEMOK)</span>
          </h2>
          
          <div className="space-y-6 text-lg font-bold leading-relaxed opacity-100 text-brand-charcoal">
            <p className="text-xl italic text-brand-pink text-center font-black mb-12">
              “당신의 마음에 천천히, 깊게 스며드는 위로를 씁니다.”
            </p>
            <p>
              안녕하세요. 사회복지사로서 사람들의 마음을 공감하는 캘리그라퍼, 희목(HEEMOK) 강혜경 입니다.
            </p>
            <p>
              오랜 시간 누군가의 고단한 마음을 마주하며 깨달은 것이 있습니다. 사람의 마음은 거창한 해결책보다는, 누군가 건네는 따스한 말 한마디와 다정한 글씨 한 점에 다시 숨을 쉴 용기를 얻는다는 사실입니다. 저는 그 다정한 온기를 저 자신 뿐만 아니라 누군가에게도 전하고 싶어 붓을 들었습니다.
            </p>
            <p>
              이곳은 바쁜 걸음을 잠시 멈추고, 오롯이 나만의 시간을 만나는 당신의 작업실입니다. 사각거리는 펜 소리와 부드러운 붓 끝에 온전히 집중하다 보면, 어느새 마음속 소란함은 잦아들고 평온함이 자리합니다.
            </p>
            <p>
              손끝에서 피어나는 꽃 한 송이가 당신의 하루에 작은 향기가 되고, 글씨와 그림으로 시작된 작은 기쁨들이 모여 삶을 풍성하게 채우길 바랍니다.
            </p>
            <p>
              서두르지 않아도 괜찮습니다. 천천히, 그리고 깊게 스며드는 마음으로 당신의 불안을 녹여내고, 그 빈자리에 다정한 안부를 적어 내려가겠습니다.
            </p>
            <p>
              일상의 분주한 어깨를 토닥이고, 여유로운 삶에 맑은 색채를 더하며, 오늘도 희목은 당신의 마음이 가장 편안하게 머물 수 있는 글씨를 씁니다.
            </p>
            <p>
              당신이 걷는 모든 걸음 위에 평온한 꽃길이 함께하기를 소망합니다.
            </p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
