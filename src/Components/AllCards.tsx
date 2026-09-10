import { use } from "react";
import type { CardsProps } from "../Interfaces/Props";
import TechCard from "./TechCard";

const AllCards = ({ technologiesPromise }: CardsProps) => {
  const technologies = use(technologiesPromise);
  return (
    <div className="grid grid-cols-3 gap-5">
      {technologies.map((technology) => (
        <TechCard technology={technology} key={technology.id} />
      ))}
    </div>
  );
};

export default AllCards;
