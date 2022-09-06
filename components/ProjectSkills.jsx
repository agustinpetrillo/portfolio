import Image from "next/image";

const ProjectSkills = ({ backgroundImage, title }) => {
  return (
    <div className="shadow-xl py-6 rounded-xl md:md:hover:scale-105 ease-in-out duration-300 flex justify-center">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={backgroundImage} height="64px" width="64px" alt="/" />
        </div>
        <h5 className="text-sm">{title}</h5>
      </div>
    </div>
  );
};

export default ProjectSkills;
