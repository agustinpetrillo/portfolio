import Background from "./Background";
import Container from "./Container";
import dynamic from "next/dynamic";
import focusAgency from "../public/assets/projects/focus-agency.png";
import portfolio from "../public/assets/projects/portfolio.png";
import vonGroup from "../public/assets/projects/von-group.png";
import weatherApp from "../public/assets/projects/weather-app.png";
import netflixClone from "../public/assets/projects/netflix-clone.png";
import eCommerce from "../public/assets/projects/e-commerce.png";
const ProjectsBuilt = dynamic(() => import("./ProjectsBuilt"));
import en from "../translations/fourth-section/en";
import es from "../translations/fourth-section/es";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
          <div
            className="grid gap-8 px-4 md:grid-cols-2 lg:px-0"
            data-aos="fade"
          >
            <ProjectsBuilt
              title="Focus Agency"
              backgroundImage={focusAgency}
              framework="NextJS"
              projectUrl="/FocusAgency"
            />
            <ProjectsBuilt
              title="This Portfolio"
              backgroundImage={portfolio}
              framework="NextJS"
              projectUrl="/Portfolio"
            />
            <ProjectsBuilt
              title="E-commerce web"
              backgroundImage={eCommerce}
              framework="NextJS"
              projectUrl="/Ecommerce"
            />
            <ProjectsBuilt
              title="Netflix Clone"
              backgroundImage={netflixClone}
              framework="NextJS"
              projectUrl="/NetflixClone"
            />
            <ProjectsBuilt
              title="Weather App"
              backgroundImage={weatherApp}
              framework="NextJS"
              projectUrl="/WeatherApp"
            />
            <ProjectsBuilt
              title="Von Group"
              backgroundImage={vonGroup}
              framework="NextJS"
              projectUrl="/VonGroup"
            />
          </div>
        </Container>
      </Background>
    </>
  );
};

export default FourthSection;
