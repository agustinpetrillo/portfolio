import Background from "./Background";
import Container from "./Container";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiGitlabFill } from "react-icons/ri";
import { useRouter } from "next/router";
import es from "../translations/first-section/es.json";
import en from "../translations/first-section/en.json";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const FirstSection = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
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
      <Background id="home" className="min-h-screen">
        <div className="fixed bottom-12 right-8">
          {theme === "light" ? (
            <MdDarkMode
              size={30}
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <MdLightMode
              size={30}
              className="cursor-pointer"
              onClick={() => setTheme("light")}
            />
          )}
        </div>
        <Container className="flex items-center justify-center min-h-screen text-center">
          <div className="pt-24 pb-20 md:py-0" data-aos="fade">
            <p className="text-sm tracking-widest text-gray-600 uppercase">
              {translate.first}
            </p>
            <h1 className="py-4 text-gray-700">
              {translate.second} <span className="text-[#5651e5]">Agustin</span>
            </h1>
            <h1 className="py-2 text-gray-700">{translate.third}</h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              {translate.fourth}
            </p>
            <div className="flex items-center justify-around max-w-xs pt-4 m-auto md:justify-between">
              <div className="p-6 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-gray-700 hover:scale-110">
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
                <div className="p-6 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-gray-700 hover:scale-110">
                  <FaGithub size={20} />
                </div>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=agustinpetrillo1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-6 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-gray-700 hover:scale-110">
                  <AiOutlineMail size={20} />
                </div>
              </a>
              <a
                href="https://gitlab.com/agustinpetrillo1"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-6 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-gray-700 hover:scale-105">
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
