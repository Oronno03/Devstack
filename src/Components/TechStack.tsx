import { Suspense } from "react";
import type { ITechnology } from "../Interfaces/Types";
import SelectedCards from "./SelectedCards";
import AllCards from "./AllCards";

const fetchTechnologies = async (): Promise<ITechnology[]> => {
  const res = await fetch("./technologies.json")
  return res.json();
}



const TechStack = () => {
  const technologiesPromise = fetchTechnologies();
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-[3fr_1fr]">
        <Suspense fallback={<div>Loading Tech Stack...</div>}>
            <AllCards technologiesPromise={technologiesPromise}/>
        </Suspense>
        <SelectedCards />
      </div>
    </div>
  );
};

export default TechStack;
