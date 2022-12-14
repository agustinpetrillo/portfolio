import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiGitlabFill } from "react-icons/ri";
import es from "../translations/navbar/es.json";
import en from "../translations/navbar/en.json";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;

  const changeLenguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  const [rotate, setRotate] = useState<boolean>(false);
  const handleScrollY = () => {
    !rotate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    setRotate(!rotate);
  };

  return (
    <>
      <div
        className={`fixed w-full min-h-0 md:py-3 py-2 shadow-xl z-50 bg-[#ecf0f3] dark:bg-[#212429] duration-300 ease-in-out ${
          show && "md:-translate-y-16 duration-300 ease-in-out"
        } `}
      >
        <div className="flex items-center justify-between px-8 2xl:px-16">
          <Link href="/">
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
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:text-[#5651e5] transition-all duration-100">
                  {translate.first}
                </li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:text-[#5651e5] transition-all duration-100">
                  {translate.second}
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:text-[#5651e5] transition-all duration-100">
                  {translate.third}
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:text-[#5651e5] transition-all duration-100">
                  {translate.fourth}
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:text-[#5651e5] transition-all duration-100">
                  {translate.fifth}
                </li>
              </Link>
              <select
                defaultValue={locale}
                onChange={(e) => changeLenguage(e)}
                className="ml-10 text-sm font-bold text-white uppercase cursor-pointer bg-[#5651e5] rounded-lg outline-none"
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
              <AiOutlineMenu size={20} onClick={handleScrollY} />
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
              <div className="flex items-center justify-between w-full">
                <select
                  defaultValue={locale}
                  onChange={(e) => changeLenguage(e)}
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
                  className="p-3 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105"
                >
                  <AiOutlineClose size={15} onClick={handleScrollY} />
                </div>
              </div>
              <div className="my-4 border-b border-b-gray-300">
                <p className="w-[85%] md:w-[90%] py-2">{translate.portfolio}</p>
              </div>
            </div>
            <div className="flex flex-col py-4">
              <ul className="uppercase">
                <div onClick={handleScrollY}>
                  <Link href="/">
                    <li className="py-4 text-sm" onClick={handleNav}>
                      {translate.first}
                    </li>
                  </Link>
                </div>
                <div onClick={handleScrollY}>
                  <Link href="/#about">
                    <li className="py-4 text-sm" onClick={handleNav}>
                      {translate.second}
                    </li>
                  </Link>
                </div>
                <div onClick={handleScrollY}>
                  <Link href="/#skills">
                    <li className="py-4 text-sm" onClick={handleNav}>
                      {translate.third}
                    </li>
                  </Link>
                </div>
                <div onClick={handleScrollY}>
                  <Link href="/#projects">
                    <li className="py-4 text-sm" onClick={handleNav}>
                      {translate.fourth}
                    </li>
                  </Link>
                </div>
                <div onClick={handleScrollY}>
                  <Link href="/#contact">
                    <li className="py-4 text-sm" onClick={handleNav}>
                      {translate.fifth}
                    </li>
                  </Link>
                </div>
              </ul>
              <div className="pt-10 uppercase">
                <p className="tracking-widest text-[#5651e5]">
                  {translate.connect}
                </p>
                <div className="flex justify-center w-full gap-1 py-4 sm:w-4/5">
                  <div className="p-3 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
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
                    <div className="p-3 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                      <FaGithub size={20} />
                    </div>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=agustinpetrillo1@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-3 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                      <AiOutlineMail size={20} />
                    </div>
                  </a>
                  <a
                    href="https://gitlab.com/agustinpetrillo1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-3 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
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
