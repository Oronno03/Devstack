import { use } from "react";
import type { CardsProps } from "../Interfaces/Props";
import TechCard from "./TechCard";

const AllCards = ({ technologiesPromise }: CardsProps) => {
  const technologies = use(technologiesPromise);
  return (
    <div>
      {technologies.map((technology) => (
        <TechCard technology={technology} key={technology.id} />
      ))}
    </div>
  );
};

export default AllCards;
