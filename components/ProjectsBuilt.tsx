import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import es from "../translations/project-built/es.json";
import en from "../translations/project-built/en.json";

type Props = {
  title: string;
  framework: string;
  backgroundImage: StaticImageData | string;
  projectUrl: string;
};

const ProjectsBuilt = ({
  title,
  framework,
  backgroundImage,
  projectUrl,
}: Props) => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;
  return (
    <>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          src={backgroundImage}
          alt="/"
          className="rounded-xl group-hover:opacity-10"
        />
        <div className="absolute hidden text-center text-white cursor-default group-hover:block top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
          <h4 className="tracking-wide uppercase whitespace-nowrap">{title}</h4>
          <p className="pt-2 pb-4 text-base font-bold">{framework}</p>
          <Link href={projectUrl}>
            <p className="p-3 font-bold text-gray-600 duration-300 ease-in-out bg-white rounded-lg cursor-pointer dark:text-gray-600 hover:scale-105">
              {translate.first}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectsBuilt;
