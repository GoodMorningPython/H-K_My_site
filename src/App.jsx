import { motion } from "motion/react";
import Header from "./Atoms/Header";
import Section1 from "./molecules/Section1";
import Section2 from "./molecules/Section2";
import Section3 from "./molecules/Section3";

function App() {
  return (
    <>
      <Header></Header>
      <Section1></Section1>
      <section className="text-white pt-40 pb-24 flex flex-col items-center px-12 bg-black">
        <Section2></Section2>
        <Section3></Section3>
      </section>
      <footer></footer>
    </>
  );
}

export default App;
