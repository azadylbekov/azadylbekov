import { FaCaretRight } from "react-icons/fa";
import { EXPERIENCE_DATA } from "../data/data";
import { useTranslation } from "react-i18next";


export default function WorkCard() {
  const { i18n } = useTranslation();

  return (
    <div>
      {EXPERIENCE_DATA.map((exp) => {
        return (
          <div key={exp.id} className="flex flex-wrap md:flex-nowrap items-start mb-10 md:mb-20 last:mb-0">
            <div className="basis-full md:basis-1/2">
              <h3 className="font-inter text-slate-50 text-lg">{exp[`${i18n.language}`].dates}</h3>
            </div>
            <div className="basis-full md:basis-1/2">
              <h2 className="font-inter font-medium text-slate-50 text-2xl mb-1">
                {exp[`${i18n.language}`].title}
              </h2>
              <h4 className="font-inter text-slate-300 text-lg mb-3">
                {exp[`${i18n.language}`].location}
              </h4>
              <BulletPoints exp={exp} />
              <TechIcons techStack={exp.techStack} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function BulletPoints({ exp }) {
  const { i18n } = useTranslation();

  return exp[`${i18n.language}`].bulletPoints.map((point, index) => (
    <div key={index} className="flex items-start mb-2">
      <div className="basis-4 mr-2">
        <FaCaretRight style={{ color: "#96FFFF", marginTop: "3px" }} />
      </div>
      <div className="grow">
        <p className="font-inter text-slate-300">{point}</p>
      </div>
    </div>
  ));
}

function TechIcons({ techStack }) {
  return (
    <div className="flex flex-wrap mt-8 ml-0 lg:ml-5">
      {techStack.map((icon) => (
        <div
          key={icon}
          className="h-8 mr-2 lg:mr-8 mb-2 lg:md-3 bg-dark-green rounded-2xl flex items-center justify-center px-10"
        >
          <span className="font-inter text-sm text-light-blue">{icon}</span>
        </div>
      ))}
    </div>
  );
}
