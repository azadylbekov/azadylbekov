import { useRef, useEffect } from "react";
import Project from "./Project.jsx";
import ScrollReveal from "scrollreveal";
import { srConfig } from "../../utils/config.js";
import { useTranslation } from "react-i18next";
import { PET_PROJECTS } from "../../data/data.jsx";


export default function Projects() {
  const revealContainer = useRef(null);
  const { t } = useTranslation();


  useEffect(() => {
    ScrollReveal().reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section className="pt-10 md:pt-[100px]" id="projects" ref={revealContainer}>
      <div className="container px-8 md:px-16 xl:px-44 mx-auto mb-5 md:mb-10">
        <div className="flex items-center mb-5 md:mb-20">
          <h2 className="shrink-0 mr-10 text-xl md:text-3xl font-bold font-inter text-orange">
            <span className="text-light-blue">03.</span> {t('project_heading')}
          </h2>
          <div className="bg-slate-500 h-px w-full"></div>
        </div>
        {PET_PROJECTS.map((project, index) => {
          return (
            <div key={index}>
              <Project reverse={index % 2 == 0} project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
