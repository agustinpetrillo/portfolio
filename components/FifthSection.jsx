import Image from "next/image";
import Background from "./Background";
import Container from "./Container";
import contact from "../public/assets/contact/contact.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { RiGitlabFill } from "react-icons/ri";
import Link from "next/link";
import en from "../translations/fifth-section/en";
import es from "../translations/fifth-section/es";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FifthSection = () => {
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
      <Background id="contact" className="min-h-0">
        <Container className="min-h-0 text-center lg:text-start pb-2">
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
            className="grid lg:grid-cols-5 gap-8 lg:px-0 justify-center"
            data-aos="fade"
          >
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div className="md:hover:scale-105 ease-in-out duration-300">
                  <Image className="rounded-xl" src={contact} alt="/" />
                </div>
                <div>
                  <h2 className="py-2">Agustin Petrillo</h2>
                  <p className="text-gray-600 tracking-widest">
                    {translate.third}
                  </p>
                  <p className="py-4 text-gray-700">{translate.fourth}</p>
                </div>
                <div>
                  <p className="uppercase pt-8 text-gray-700">
                    {translate.fifth}
                  </p>
                  <div className="flex md:justify-center justify-around max-w-xs m-auto pt-4 gap-2">
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
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=agustinpetrillo1@gmail.com"
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
              </div>
            </div>
            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  method="POST"
                  action="https://getform.io/f/02a134d9-abab-4dc1-b8e0-b9acbfc8d138"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2 text-start">
                        {translate.name}
                      </label>
                      <input
                        type="text"
                        className="text-sm p-3 border-2 rounded-lg flex border-gray-300 outline-[#5651e591]"
                        placeholder={translate.name}
                        name="Name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2 text-start">
                        {translate.phone}
                      </label>
                      <input
                        type="number"
                        className="text-sm p-3 border-2 rounded-lg flex border-gray-300 outline-[#5651e591]"
                        placeholder={translate.phone}
                        name="Phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-start">
                      {translate.email}
                    </label>
                    <input
                      type="email"
                      className="text-sm p-3 border-2 rounded-lg flex border-gray-300 outline-[#5651e591]"
                      placeholder={translate.email}
                      name="Email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-start">
                      {translate.subject}
                    </label>
                    <input
                      type="text"
                      className="text-sm p-3 border-2 rounded-lg flex border-gray-300 outline-[#5651e591]"
                      placeholder={translate.subject}
                      name="Subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-start">
                      {translate.messaje}
                    </label>
                    <textarea
                      type="text"
                      className="text-sm p-3 border-2 rounded-lg flex border-gray-300 resize-none h-40 outline-[#5651e591]"
                      placeholder={translate.messaje}
                      name="Message"
                    />
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4 hover:scale-105 duration-200 ease-in-out">
                    {translate.sendMessage}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200">
                <HiOutlineChevronDoubleUp
                  size={20}
                  className="text-[#5651e5]"
                />
              </div>
            </Link>
          </div>
        </Container>
      </Background>
      <style>{`
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        `}</style>
    </>
  );
};

export default FifthSection;
