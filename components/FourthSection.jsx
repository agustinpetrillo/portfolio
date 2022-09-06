import Background from "./Background";
import Container from "./Container";
import focusAgency from "../public/assets/projects/focus-agency.png";
import portfolio from "../public/assets/projects/portfolio.png";
import vonGroup from "../public/assets/projects/von-group.png";
import ProjectsBuilt from "./ProjectsBuilt";
import en from "../translations/fourth-section/en";
import es from "../translations/fourth-section/es";
import { useRouter } from "next/router";

const FourthSection = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;
  return (
    <Background id="projects" className="min-h-0">
      <Container className="text-center lg:text-start min-h-0 pb-20 md:pb-32">
        <p className="uppercase tracking-widest text-[#5651e5]">
          {translate.first}
        </p>
        <h2 className="py-4">{translate.second}</h2>
        <div className="grid md:grid-cols-2 gap-8 px-4 lg:px-0">
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
            title="Von Group"
            backgroundImage={vonGroup}
            framework="NextJS"
            projectUrl="/VonGroup"
          />
        </div>
      </Container>
    </Background>
  );
};

export default FourthSection;
