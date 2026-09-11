import { Suspense, useState } from "react";
import type { ITechnology } from "../Interfaces/Types";
import YourStack from "./YourStack";
import { MoonLoader } from "react-spinners";
import AllCards from "./AllCards";

const fetchTechnologies = async (): Promise<ITechnology[]> => {
  const res = await fetch("./technologies.json");

  // Manual delay to show loading state.
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);

  return res.json();
};
const technologiesPromise = fetchTechnologies();

const TechStack = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  return (
    <div className="container mx-auto mt-28">
      <h1 className="font-main text-[36px] text-[#0F172A] font-extrabold">
        Explore the{" "}
        <span className="bg-clip-text text-transparent bg-gradient-main">
          Technologies
        </span>
      </h1>
      <p className="font-main text-[16px] text-[#64748B]">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="flex flex-col md:grid grid-cols-[3fr_1fr] gap-8 mt-10">
        <Suspense
          fallback={
            <div className="flex w-full min-h-[70vh] justify-center items-center">
              <MoonLoader color="#0EA5E9" />
            </div>
          }
        >
          <AllCards
            technologiesPromise={technologiesPromise}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </Suspense>
        <YourStack
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>
    </div>
  );
};

export default TechStack;
