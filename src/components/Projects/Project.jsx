import React from "react";
import vectorStraight from "../../assets/images/VectorStraigt.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from './Project.module.scss';
import { useTranslation } from "react-i18next";


export default function ({ reverse, project }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative mb-10 md:mb-40">
      <div
        className={
          "flex flex-wrap md:flex-nowrap items-start gap-x-5 " + (reverse ? " flex-row-reverse" : "")
        }
      >
        <div className={"basis-full md:basis-3/5 flex" + (reverse ? "  justify-end" : "")}>
          <a className={styles.projectImgLink} href={project.appLink} target="_blank">
            <div className={styles.projectImgWrapper}>
              <img src={project.image} alt="" />
            </div>
          </a>
        </div>
        <div className="basis-full mt-5 md:mt-0 md:basis-2/5">
          <h3 className="font-monaco text-light-blue text-lg md:text-2xl mb-2">
            {t('project_feature')}
          </h3>
          <a
            href={project.appLink}
            target="_blank"
            className="font-inter font-bold text-slate-50 text-2xl md:text-3xl mb-4 inline-block hover:text-light-blue"
          >
            {project[`${i18n.language}`].title}
          </a>
          <div className="md:w-4/5 mb-4">
            <p className="font-inter text-slate-50 text-base mb-2">
              {project[`${i18n.language}`].description}
            </p>
            <p className="font-inter text-slate-50 text-base">
              {project[`${i18n.language}`].stack}
            </p>
          </div>
          <div className="flex flex-row gap-x-5">
            <a
              className="text-slate-50 duration-300 hover:text-light-blue text-2xl"
              href={project.githubLink}
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="text-slate-50 duration-300 hover:text-light-blue text-2xl"
              href={project.appLink}
              target="_blank"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute" style={{ bottom: "-40px", left: "490px" }}>
        <img src={vectorStraight} alt="" />
      </div>
    </div>
  );
}
