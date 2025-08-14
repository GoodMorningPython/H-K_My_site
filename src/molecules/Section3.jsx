import { useRef } from "react";
import { motion, useInView } from "motion/react";
import GunFrame from "../Atoms/GunFrame";
import Pistol_info from "../Atoms/Pistol_info";

const Section3 = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const ref = useRef(null);

  return (
    <div className="max-w-[872px] w-full flex flex-col">
      <div>
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
          transition={{ duration: 1 }}
          className="text-3xl text-white font-semibold"
        >
          Heckler & Koch GmbH
        </motion.h2>
      </div>
      <motion.div className="grid grid-cols-2 gap-[10px]">
        {Pistol_info().map((gun, index) => (
          <GunFrame
            key={index}
            name={gun.name}
            info={gun.info}
            price={gun.price}
            imgUrl={gun.url}
            refProp={ref}
            variants={variants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Section3;
