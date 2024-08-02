import React, { useState } from "react";
import MouseDown from "../components/MouseDown";
import { smoothScroll } from "../helpers/smoothScroll";
import { useLanguage } from "../context/LanguageContext";
import classNames from "classnames";

const About = () => {
  const { language } = useLanguage();
  const [hasTime, setHasTime] = useState(true);

  const translations = {
    en: {
      about: "Who am I?",
      toggleTextShort: "Short version",
      toggleTextLong: "Long version",
      intro: (
        <>
          I am a developer specializing in{" "}
          <span className="text-yellowJs">JavaScript</span> and{" "}
          <span className="text-yellowJs">React</span>, passionate about
          creating modern and interactive web applications.
        </>
      ),
      bio1: (
        <>
          I started my career as a{" "}
          <span className="text-yellowJs">biomedical engineer</span> in the
          nuclear industry with a master's degree in biomedical engineering and
          a DUT in electrical and industrial computer engineering. I chose to
          make a <span className="text-yellowJs">career change</span> through a
          14-month training with Openclassroom.
        </>
      ),
      transition: (
        <>
          My transition to software development was guided by my constant desire
          to improve and take on new challenges. I am{" "}
          <span className="text-yellowJs">optimistic</span>,{" "}
          <span className="text-yellowJs">perfectionist</span>, and I love
          continuous learning.
        </>
      ),
      skills: (
        <>
          My journey has instilled in me{" "}
          <span className="text-yellowJs">scientific rigor</span> and an ability
          to solve complex problems, skills I now apply in development and
          testing.
        </>
      ),
      hobbies: (
        <>
          Outside of coding, I find a precious balance spending time with my
          husband and children. I also nurture a passion for archaeology and
          metal detecting, interests that reflect my{" "}
          <span className="text-yellowJs">curiosity</span> and{" "}
          <span className="text-yellowJs">perseverance</span>.
        </>
      ),
      childhood: (
        <>
          My journey into computing began in childhood with BASIC on an Amstrad
          6128, an experience that sowed the seeds of{" "}
          <span className="text-yellowJs">my passion for technology</span>.
        </>
      ),
      jobSearch: (
        <>
          Currently looking for full-time or part-time employment, remote work,
          as a <span className="text-yellowJs">Front-End developer</span> or{" "}
          <span className="text-yellowJs">QA tester</span>.
        </>
      ),
      ready:
        "I am also ready to take on additional training through an apprenticeship or Poec.",
      recognition:
        "I have a recognized worker status for a physical disability.",
      short1: (
        <>
          JavaScript and React developer,{" "}
          <span className="text-yellowJs">passionate</span> about modern web
          applications.
        </>
      ),
      short2: (
        <>
          Former <span className="text-yellowJs">biomedical engineer</span>,
          14-month career change via Openclassroom.
        </>
      ),
      short3: (
        <>
          I love <span className="text-yellowJs">challenges</span>, continuous
          learning, and <span className="text-yellowJs">scientific rigor.</span>
        </>
      ),
      short4: (
        <>
          Spending time with <span className="text-yellowJs">my family</span>,
          passionate about metal detecting.
        </>
      ),
      short5: (
        <>
          <span className="text-yellowJs">Looking for a job</span> as a
          Front-End developer or QA tester, recognized as a disabled worker.
        </>
      ),
    },
    fr: {
      about: "Qui suis-je ?",
      toggleTextShort: "Version courte",
      toggleTextLong: "Version longue",
      intro: (
        <>
          Je suis une développeuse spécialisée en{" "}
          <span className="text-yellowJs">JavaScript</span> et{" "}
          <span className="text-yellowJs">React</span>, passionnée par la
          création d'applications web modernes et interactives.
        </>
      ),
      bio1: (
        <>
          J'ai débuté ma carrière en tant qu'
          <span className="text-yellowJs">ingénieure biomédicale</span> dans le
          nucléaire avec une maîtrise en génie biomédical et un DUT en génie
          électrique et informatique industrielle. J'ai choisi de faire une{" "}
          <span className="text-yellowJs">reconversion professionnelle</span>{" "}
          via une formation de 14 mois avec Openclassroom.
        </>
      ),
      transition: (
        <>
          Ma transition vers le développement informatique a été guidée par ma
          constante volonté de m'améliorer et de relever de nouveaux défis. Je
          suis <span className="text-yellowJs">optimiste</span>,{" "}
          <span className="text-yellowJs">perfectionniste</span> et j'aime
          apprendre continuellement.
        </>
      ),
      skills: (
        <>
          Mon parcours m'a inculqué une{" "}
          <span className="text-yellowJs">rigueur scientifique</span> et une
          capacité à résoudre des problèmes complexes, des compétences que
          j'applique désormais dans le développement et le test.
        </>
      ),
      hobbies: (
        <>
          En dehors du code, je trouve un équilibre précieux en passant du temps
          avec mon mari et mes enfants. Je nourris également une passion pour
          l'archéologie et la détection de métaux, des intérêts qui reflètent ma{" "}
          <span className="text-yellowJs">curiosité</span> et ma{" "}
          <span className="text-yellowJs">persévérance</span>.
        </>
      ),
      childhood: (
        <>
          Mon voyage dans l'informatique a débuté dès l'enfance avec du BASIC
          sur un Amstrad 6128, une expérience qui a semé les graines de{" "}
          <span className="text-yellowJs">ma passion pour la technologie</span>.
        </>
      ),
      jobSearch: (
        <>
          Actuellement à la recherche d'un emploi à temps plein ou partiel, en
          travail à distance, comme{" "}
          <span className="text-yellowJs">développeuse Front-End</span> ou{" "}
          <span className="text-yellowJs">testeuse QA</span>.
        </>
      ),
      ready:
        "Je suis aussi prête à effectuer des formations complémentaires en alternance ou Poec.",
      recognition:
        "Je bénéficie d'une reconnaissance de travailleur handicapé pour un handicap physique.",
      short1: (
        <>
          Développeuse JavaScript et React,{" "}
          <span className="text-yellowJs">passionnée</span> par les applications
          web modernes.
        </>
      ),
      short2: (
        <>
          Ancienne<span className="text-yellowJs"> ingénieure biomédicale</span>
          , reconversion de 14 mois via Openclassroom.
        </>
      ),
      short3: (
        <>
          J'aime les <span className="text-yellowJs">défis</span>,
          l'apprentissage continu, et la{" "}
          <span className="text-yellowJs">rigueur scientifique.</span>
        </>
      ),
      short4: (
        <>
          Passer du temps avec <span className="text-yellowJs">ma famille</span>
          , passionnée de detection de métaux.{" "}
        </>
      ),
      short5: (
        <>
          <span className="text-yellowJs">En recherche emploi</span>{" "}
          développeuse Front-End ou testeuse QA, reconnue travailleuse
          handicapée.{" "}
        </>
      ),
    },
  };

  const t = translations[language];

  const handleToggle = () => {
    setHasTime(!hasTime);
  };

  const classes = classNames(
    "bg-bg1 items-center p-9 gap-4 text-main1 text-xs md:text-sm lg:text-base font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-bg1 w-full h-auto lg:w-custom-500",
    {
      "lg:h-80": language === "fr",
      "lg:h-72": language === "en",
    }
  );

  return (
    <div className="flex flex-col items-center p-0 gap-8 bg-bg2 bg-custom-bg bg-center-50 bg-cover bg-no-repeat">
      <div className="w-screen">
        <svg
          className="separator h-12 lg:h-32"
          width="99.5%"
          viewBox="0.1 0.1 180 40"
          preserveAspectRatio="none"
        >
          <g transform="translate(-18.298844,-77.973964)">
            <path
              style={{ fill: "#12F7D6" }}
              d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z"
            />
            <path
              style={{ fill: "#22313f" }}
              d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z"
            />
          </g>
        </svg>
      </div>
      <div id="about"></div>
      <div className="inline-flex flex-col bg-bg1 items-center px-6 py-5 md:px-10 md:py-8 text-white text-xl lg:text-2xl font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-main1 text-shadow-custom">
        {t.about}
      </div>

      {/* Button for short version, shown above the content */}
      {!hasTime && (
        <button
          onClick={handleToggle}
          className="bg-bg1 text-sm md:text-base px-4 py-2 rounded-3xl mt-4 border-2 border-solid border-black transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="flex items-center gap-2 text-yellowJs">
            <span>{t.toggleTextShort}</span>
          </span>
        </button>
      )}

      {!hasTime ? (
        <div className="havetime flex flex-col lg:flex-row items-center justify-center w-3/4 lg:w-2/3 gap-3 md:gap-6 lg:gap-14 lg:flex-wrap pb-8 ">
          <div className={classes}>
            <p>{t.intro}</p>
            <p>{t.bio1}</p>
          </div>
          <div className={classes}>
            <p>{t.transition}</p>
            <p>{t.skills}</p>
          </div>
          <div className={classes}>
            <p>{t.hobbies}</p>
            <p>{t.childhood}</p>
          </div>
          <div className={classes}>
            <p>{t.jobSearch}</p>
            <p>{t.ready}</p>
            <p>{t.recognition}</p>
          </div>
        </div>
      ) : (
        <div className="notime bg-bg1 items-center p-5 md:p-9 text-main1 text-xs md:text-sm lg:text-base font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-bg1  h-auto w-4/5 md:w-2/3 lg:w-auto">
          <p className="py-2">{t.short1}</p>
          <p className="py-2">{t.short2}</p>
          <p className="py-2">{t.short3}</p>
          <p className="py-2">{t.short4}</p>
          <p className="py-2">{t.short5}</p>
        </div>
      )}

      {/* Button for long version, shown below the content */}
      {hasTime && (
        <button
          onClick={handleToggle}
          className="bg-bg1 text-sm md:text-base px-4 py-2 rounded-3xl mt-4 border-2 border-solid border-black transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-main1">{t.toggleTextLong}</span>
        </button>
      )}

      <button
        onClick={() => smoothScroll("#project")}
        className="flex justify-center items-end "
      >
        <MouseDown mouseColor="#12F7D6" />
      </button>
      <div className="w-screen p-0">
      <svg
          className="separator h-12 lg:h-32"
          width="99.5%"
          viewBox="0.1 0.1 180 40"
          preserveAspectRatio="none"
        >
          <g transform="scale(1, -1) translate(-17, -130)">
            <path
              style={{ fill: "#12F7D6" }}
              d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z"
            />
            <path
              style={{ fill: "#292F36" }}
              d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default About;