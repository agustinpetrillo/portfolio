import Background from "./Background";
import Container from "./Container";
import ProjectSkills from "../components/ProjectSkills";
import en from "../translations/third-section/en";
import es from "../translations/third-section/es";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ThirdSection = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;

  useEffect(() => {
    AOS.init({
      duration: 100,
      easing: "ease-in",
      disable: ["phone", "mobile"],
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  });
  return (
    <>
      <Background id="skills" className="min-h-0">
        <Container className="text-center lg:text-start min-h-0 pb-20 md:pb-32 flex flex-col items-center md:block">
          <p
            className="uppercase tracking-widest text-[#5651e5]"
            data-aos="fade"
          >
            {translate.first}
          </p>
          <h2 className="py-4 max-w-[80%]" data-aos="fade">
            {translate.second}
          </h2>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 md:px-5 lg:px-0"
            data-aos="fade"
          >
            <ProjectSkills
              backgroundImage="/assets/skills/html.png"
              title="HTML"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/css.png"
              title="CSS"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/nextjs.png"
              title="NEXTJS"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/javascript.png"
              title="JAVASCRIPT"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/react.png"
              title="REACT"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/github1.png"
              title="GITHUB"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/tailwind.png"
              title="TAILWIND"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/html.png"
              title="GITLAB"
            />
          </div>
        </Container>
      </Background>
    </>
  );
};

export default ThirdSection;
