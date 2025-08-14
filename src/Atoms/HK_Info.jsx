import { useEffect, useRef, useReducer } from "react";
import { motion } from "motion/react";
import InfoData from "../Atoms/InfoData";

const variants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const HK_Info = () => {
  const indexRef = useRef(0);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const nextSlide = () => {
    indexRef.current = (indexRef.current + 1) % InfoData.length;
    forceUpdate();
  };

  const prevSlide = () => {
    indexRef.current =
      (indexRef.current - 1 + InfoData.length) % InfoData.length;
    forceUpdate();
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const { title, description1, description2, image } =
    InfoData[indexRef.current];

  return (
    <div
      className="relative bg-center bg-cover flex items-center justify-center overflow-hidden w-full h-[500px] rounded-2xl top-24"
      style={{ backgroundImage: `url(${image})` }}
    >
      <motion.div
        key={indexRef.current}
        className="text-white p-8 rounded-xl max-w-xl absolute left-[5px] top-[5px]"
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{description1}</p>
        <p className="text-lg">{description2}</p>
      </motion.div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full hover:bg-white/40 transition backdrop-blur-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full hover:bg-white/40 transition backdrop-blur-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default HK_Info;
