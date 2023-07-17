import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import Background from "./Background";
import Container from "./Container";
import ProjectSkills from "./ProjectSkills";
import en from "../translations/third-section/en.json";
import es from "../translations/third-section/es.json";
import "aos/dist/aos.css";
import { Skills } from "../utils/Data";

const ThirdSection = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;

  useEffect(() => {
    AOS.init({
      duration: 100,
      easing: "ease-in",
      disable: window.innerWidth < 768,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  });
  return (
    <>
      <Background id="skills" className="min-h-0">
        <Container className="flex flex-col items-center min-h-0 pb-20 text-center lg:text-start md:pb-32 md:block">
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
            className="grid gap-8 px-12 md:grid-cols-2 lg:grid-cols-4 md:px-5 lg:px-0"
            data-aos="fade"
          >
            {Skills.map((skill, i) => (
              <ProjectSkills
                key={i}
                backgroundImage={skill.src}
                title={skill.skill}
              />
            ))}
          </div>
        </Container>
      </Background>
    </>
  );
};

export default ThirdSection;
