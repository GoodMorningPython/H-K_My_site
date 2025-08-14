import { CircleArrowRight } from "lucide-react";
import { motion } from "motion/react";
const GunFrame = ({ name, info, price, imgUrl, refProp, variants }) => {
  return (
    <motion.div
      className={`rounded-2xl w-[400px] h-[450px] z-50 text-white relative mt-2 p-[10px] gap-[20px]`}
      ref={refProp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundColor: "gray",
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-xl font-semibold">모델명: {name}</h1>
      <h2 className="text-lg">{info}</h2>
      <h3 className="absolute bottom-[10px] left-[20px]">가격: {price}</h3>
      <motion.button
        className="absolute bottom-[20px] right-[20px]"
        whileHover={{ scale: 1.1}}
      >
        <CircleArrowRight size={42} />
      </motion.button>
    </motion.div>
  );
};

export default GunFrame;
