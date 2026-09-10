import { use } from "react";
import type { AllCardsProps } from "../Interfaces/Props";
import TechCard from "./TechCard";

const AllCards = ({
  technologiesPromise,
  selectedTechnologies,
  setSelectedTechnologies,
}: AllCardsProps) => {
  const technologies = use(technologiesPromise);
  return (
    <div className="grid grid-cols-3 gap-5">
      {technologies.map((technology) => (
        <TechCard
          technology={technology}
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
          key={technology.id}
        />
      ))}
    </div>
  );
};

export default AllCards;
