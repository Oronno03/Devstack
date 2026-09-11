import type { YourStackProps } from "../Interfaces/Props";
import SelectedCard from "./SelectedCard";

const YourStack = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: YourStackProps) => {
  return (
    <div className="flex flex-col gap-1 p-5 border border-solid border-[#F1F5F9] rounded-2xl h-max">
      <div className="mb-4">
        <h1 className="font-main font-bold text-[20px] text-[#0F172A]">
          Your Stack
        </h1>
        <p className="font-mail text-[#94A3B8] text-[15px]">
          {
            selectedTechnologies.length > 0 ?
            `${selectedTechnologies.length} technologies selected.` : 
            "No Technologies Selected Yet"
          }
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-12">
        {
          selectedTechnologies.length > 0 ? selectedTechnologies.map((tech) => (
          <SelectedCard key={tech.id} technology={tech} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
        )) : <div className="border border-dashed border-[#94A3B8] rounded-lg p-6 text-center text-[#94A3B8]">
          Your stack is empty.
        </div>
        }

      </div>
      <div>
        <button onClick={() => setSelectedTechnologies([])} className="cursor-pointer hover:text-white hover:bg-[#D82C20] ease-in transition-all text-[#D82C20] border border-solid border-[#D82C20] w-full rounded-lg font-semibold text-[14px] py-1.75">Remove All</button>
      </div>
    </div>
  );
};

export default YourStack;
