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
              backgroundImage="/assets/skills/git.png"
              title="GIT"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/javascript.png"
              title="JAVASCRIPT"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/gitlab.png"
              title="GITLAB"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/tailwind.png"
              title="TAILWIND"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/react.png"
              title="REACT"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/firebase.png"
              title="FIREBASE"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/github1.png"
              title="GITHUB"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/nuxt.png"
              title="NUXT"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/flutter.png"
              title="FLUTTER"
            />
            <ProjectSkills
              backgroundImage="/assets/skills/dart.png"
              title="DART"
            />
          </div>
        </Container>
      </Background>
    </>
  );
};

export default ThirdSection;
