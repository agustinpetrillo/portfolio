import Image, { StaticImageData } from "next/image";

type Props = {
  backgroundImage: StaticImageData | string;
  title: string;
};

const ProjectSkills = ({ backgroundImage, title }: Props) => {
  return (
    <>
      <div className="flex justify-center py-6 duration-300 ease-in-out shadow-xl rounded-xl md:md:hover:scale-105">
        <div className="grid items-center justify-center grid-cols-2 gap-4 cursor-default">
          <div className="m-auto">
            <Image
              src={backgroundImage}
              height="64px"
              width="64px"
              alt="/"
              objectFit="contain"
            />
          </div>
          <h5 className="text-sm">{title}</h5>
        </div>
      </div>
    </>
  );
};

export default ProjectSkills;
