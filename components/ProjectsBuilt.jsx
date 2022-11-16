import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import es from "../translations/project-built/es";
import en from "../translations/project-built/en";

const ProjectsBuilt = ({ title, framework, backgroundImage, projectUrl }) => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;
  return (
    <>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          src={backgroundImage}
          alt="/"
          className="rounded-xl group-hover:opacity-10"
        />
        <div className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center text-white cursor-default">
          <h4 className="uppercase tracking-wide whitespace-nowrap">{title}</h4>
          <p className="pb-4 pt-2 font-bold text-base">{framework}</p>
          <Link href={projectUrl}>
            <p className="p-3 rounded-lg bg-white text-gray-600 font-bold cursor-pointer hover:scale-105 ease-in-out duration-300">
              {translate.first}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectsBuilt;
