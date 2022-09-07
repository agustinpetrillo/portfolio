import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiGitlabFill } from "react-icons/ri";
import es from "../translations/navbar/es";
import en from "../translations/navbar/en";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [show, setShow] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;

  const changeLenguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  return (
    <>
      <div
        className={`fixed w-full min-h-0 md:py-3 py-2 shadow-xl z-50 bg-[#ecf0f3] duration-300 ease-in-out ${
          show && "md:-translate-y-16 duration-300 ease-in-out"
        } `}
      >
        <div className="flex justify-between items-center px-8 2xl:px-16">
          <Link href="/#home">
            <Image
              src="/assets/logo-nav.png"
              width="40px"
              height="40px"
              alt="/"
              className="rounded-full cursor-pointer"
            />
          </Link>
          <div>
            <ul className="hidden md:flex">
              <Link href="/#home">
                <li className="ml-10 text-sm uppercase hover:border-b border-b-[#5651e5]">
                  {translate.first}
                </li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b border-b-[#5651e5]">
                  {translate.second}
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b border-b-[#5651e5]">
                  {translate.third}
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b border-b-[#5651e5]">
                  {translate.fourth}
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b border-b-[#5651e5]">
                  {translate.fifth}
                </li>
              </Link>
              <select
                defaultValue={locale}
                onChange={changeLenguage}
                className="ml-10 text-sm font-bold text-white uppercase cursor-pointer bg-[#5651e5] rounded-lg outline-none hover:scale-105 ease-in-out duration-100"
              >
                <option
                  value="en"
                  className="ml-10 text-sm font-bold uppercase"
                >
                  EN
                </option>
                <option
                  value="es"
                  className="ml-10 text-sm font-bold uppercase"
                >
                  ES
                </option>
              </select>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={20} />
            </div>
          </div>
        </div>
        {/* Overlay background when side menu appears and side menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in-out duration-500"
              : "md:hidden fixed left-full top-0 w-full h-screen ease-in-out duration-200"
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-3/4 sm:w-3/5 md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 flex flex-col justify-center"
                : "fixed -left-full top-0 w-3/4 sm:w-3/5 md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 flex flex-col justify-center"
            }
          >
            <div className="pt-5">
              <div className="flex w-full items-center justify-between">
                <select
                  defaultValue={locale}
                  onChange={changeLenguage}
                  className="text-sm font-bold text-white uppercase cursor-pointer bg-[#5651e5] rounded-lg outline-none"
                >
                  <option
                    value="en"
                    className="ml-10 text-sm font-bold uppercase"
                  >
                    EN
                  </option>
                  <option
                    value="es"
                    className="ml-10 text-sm font-bold uppercase"
                  >
                    ES
                  </option>
                </select>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-200"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-b-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-2">{translate.portfolio}</p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/#home">
                  <li className="py-4 text-sm" onClick={handleNav}>
                    {translate.first}
                  </li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-sm" onClick={handleNav}>
                    {translate.second}
                  </li>
                </Link>
                <Link href="/#skills">
                  <li className="py-4 text-sm" onClick={handleNav}>
                    {translate.third}
                  </li>
                </Link>
                <Link href="/#projects">
                  <li className="py-4 text-sm" onClick={handleNav}>
                    {translate.fourth}
                  </li>
                </Link>
                <Link href="/#contact">
                  <li className="py-4 text-sm" onClick={handleNav}>
                    {translate.fifth}
                  </li>
                </Link>
              </ul>
              <div className="pt-10 uppercase">
                <p className="tracking-widest text-[#5651e5]">
                  {translate.connect}
                </p>
                <div className="flex justify-center py-4 w-full sm:w-4/5 gap-1">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-200">
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
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-200">
                      <FaGithub size={20} />
                    </div>
                  </a>
                  <a
                    href="https://github.com/agustinpetrillo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-200">
                      <AiOutlineMail size={20} />
                    </div>
                  </a>
                  <a
                    href="https://gitlab.com/agustinpetrillo1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-200">
                      <RiGitlabFill size={20} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
