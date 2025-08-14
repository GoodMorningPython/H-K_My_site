import { motion } from "motion/react";
const Section1 = () => {
  const hidden = { opacity: 0, y: 50 };
  const show = { opacity: 1, y: 0 };
  return (
    <>
      <section className="h-screen bg-gray-600 flex flex-col justify-center items-center text-center gap-3">
        <motion.h1
          initial={hidden}
          animate={show}
          transition={{ duration: 1 }}
          className="text-6xl text-white font-bold"
        >
          안전성이 변화하는 기술로는 충분치 않습니다.
        </motion.h1>
        <motion.h2
          initial={hidden}
          animate={show}
          viewport={{ once: true, amount: "all" }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl text-white font-semibold"
        >
          어느 때에도 보장되는 안정성을 가진 총, H&K
        </motion.h2>
      </section>
    </>
  );
};
export default Section1;
