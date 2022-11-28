import Background from "./Background";
import Container from "./Container";
import es from "../translations/second-section/es";
import en from "../translations/second-section/en";
import { useRouter } from "next/router";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SecondSection = () => {
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
      <Background id="about" className="min-h-0">
        <Container className="min-h-0 pb-20 md:pb-32">
          <div
            className="flex flex-col items-center justify-center col-span-2 text-center lg:items-start md:text-start"
            data-aos="fade"
          >
            <p className="uppercase tracking-widest text-[#5651e5]">
              {translate.first}
            </p>
            <h2 className="py-4">{translate.second}</h2>
            <p className="py-2 text-gray-600 max-w-[80%] md:max-w-full">
              {translate.third}
            </p>
            <Link href="/#projects">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                {translate.fourth}
              </p>
            </Link>
          </div>
        </Container>
      </Background>
    </>
  );
};
export default SecondSection;
