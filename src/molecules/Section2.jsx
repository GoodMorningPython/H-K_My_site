import { useRef } from "react";
import { motion } from "motion/react";
import HK_Info from "../Atoms/HK_Info";
const Section2 = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const ref = useRef(null);
  return (
    <div className="max-w-[872px] w-full flex flex-col">
      <motion.h2
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-3xl text-white font-normal"
      >
        자신의 안전이 필요한 모든 순간
      </motion.h2>

      <motion.h2
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={variants}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-3xl text-white font-semibold"
      >
        Heckler & Koch GmbH
      </motion.h2>

      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={variants}
        transition={{ duration: 1 }}
        className="h-screen"
      >
        <HK_Info />
      </motion.div>
    </div>
  );
};

export default Section2;
