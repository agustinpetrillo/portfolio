import Background from "../components/Background";
import Container from "../components/Container";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiGitlabFill } from "react-icons/ri";
import { useRouter } from "next/router";
import es from "../translations/first-section/es";
import en from "../translations/first-section/en";

const FirstSection = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;
  return (
    <>
      <Background id="home" className="min-h-screen">
        <Container className="flex items-center justify-center text-center min-h-screen">
          <div className="pt-24 pb-20 md:py-0">
            <p className="uppercase text-sm tracking-widest text-gray-600">
              {translate.first}
            </p>
            <h1 className="py-4 text-gray-700">
              {translate.second} <span className="text-[#5651e5]">Agustin</span>
            </h1>
            <h1 className="py-2 text-gray-700">{translate.third}</h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              {translate.fourth}
            </p>
            <div className="flex items-center md:justify-between justify-around max-w-xs m-auto pt-4">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-200">
                <a
                  href="https://www.linkedin.com/in/agustin-petrillo-93300b231/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
              <a
                href="https://github.com/agustinpetrillo"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-200">
                  <FaGithub size={20} />
                </div>
              </a>
              <a
                href="https://github.com/agustinpetrillo"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-200">
                  <AiOutlineMail size={20} />
                </div>
              </a>
              <a
                href="https://gitlab.com/agustinpetrillo1"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in-out duration-200">
                  <RiGitlabFill size={20} />
                </div>
              </a>
            </div>
          </div>
        </Container>
      </Background>
    </>
  );
};

export default FirstSection;
