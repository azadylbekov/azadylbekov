import { useRef, useEffect } from "react";
import WorkCard from "./WorkCard.jsx";
import ScrollReveal from "scrollreveal";
import { srConfig } from "../utils/config.js";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const revealContainer = useRef(null);
  const { t } = useTranslation();


  useEffect(() => {
    ScrollReveal().reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section id="experience" className="pt-10 md:pt-[100px]" ref={revealContainer}>
      <div className="container px-8 md:px-16 xl:px-44 mx-auto mb-10">
        <div className="flex items-center mb-10">
          <div className="grow hidden md:block bg-slate-500 h-px"></div>
          <h2 className="shrink-0 text-left basis-full md:basis-3/5 md:text-center text-2xl md:text-3xl font-bold font-inter text-orange">
            <span className="text-light-blue">02.</span> {t('experience_heading')}
          </h2>
          <div className="grow hidden sm:block bg-slate-500 h-px"></div>
        </div>
        <WorkCard />
      </div>
    </section>
  );
}
