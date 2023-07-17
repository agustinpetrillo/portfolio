import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Projects } from "../utils/Data";
import Background from "./Background";
import Container from "./Container";
import dynamic from "next/dynamic";
import testing from "../public/assets/projects/testing.png";
const ProjectsBuilt = dynamic(() => import("./ProjectsBuilt"));
import en from "../translations/fourth-section/en.json";
import es from "../translations/fourth-section/es.json";

const FourthSection = () => {
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
      <Background id="projects" className="min-h-0">
        <Container className="min-h-0 pb-20 text-center lg:text-start md:pb-32">
          <p
            className="uppercase tracking-widest text-[#5651e5]"
            data-aos="fade"
          >
            {translate.first}
          </p>
          <h2 className="py-4" data-aos="fade">
            {translate.second}
          </h2>
          <h4 data-aos="fade" className="pb-4">
            Front-End
          </h4>
          <div
            className="grid gap-8 px-4 md:grid-cols-2 lg:px-0"
            data-aos="fade"
          >
            {Projects.map((project, i) => (
              <ProjectsBuilt
                key={i}
                title={project.title}
                backgroundImage={project.background}
                framework={project.framework}
                projectUrl={project.url}
              />
            ))}
          </div>
          <h4 className="py-4" data-aos="fade">
            Testing
          </h4>
          <div
            className="grid gap-8 px-4 md:grid-cols-2 lg:px-0"
            data-aos="fade"
          >
            <ProjectsBuilt
              title="Testing"
              backgroundImage={testing}
              framework="Robot Framework"
              projectUrl="/Testing"
            />
          </div>
        </Container>
      </Background>
    </>
  );
};

export default FourthSection;
