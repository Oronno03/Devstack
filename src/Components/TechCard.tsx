import { useEffect, useState } from "react";
import type { TechCardProps } from "../Interfaces/Props";

const TechCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleAdd = () => {
    if (selectedTechnologies.some((tech) => tech.id == technology.id)) return;
    setSelectedTechnologies([...selectedTechnologies, technology]);
  };

  useEffect(() => {
    setIsSelected(
      selectedTechnologies.some((tech) => tech.id === technology.id),
    );
  }, [selectedTechnologies]);

  return (
    <div
      className={`flex flex-col gap-4 border-2 border-solid rounded-2xl relative p-5 ${isSelected ? "border-[#0EA5E9]" : "border-[#F1F5F9]"}`}
    >
      <div className="flex justify-between">
        <img src={technology.icon} alt="" className="w-8 h-8" />
        <p className="bg-[#F0F9FF] text-[#0EA5E9] py-0.5 px-2.5 rounded-full">
          {technology.badge}
        </p>
      </div>
      <h1 className="font-main font-bold text-[18px]">{technology.name}</h1>
      <p className="font-mail font-normal text-[12px] text-[#64748B]">
        {technology.description}
      </p>
      <div className="h-px w-full bg-[#F1F5F9]"></div>
      <div className="flex justify-between items-center">
        <p className="font-main text-[#475569] px-4 py-0.5 bg-[#F1F5F980] text-[11px]">
          {technology.category}
        </p>
        <p className="font-main text-[#475569] text-[11px]">
          {technology.difficulty}
        </p>
        <p>⭐ {technology.rating}</p>
      </div>
      <button
        className={`font-main  text-white py-2.5 rounded-lg text-[11px] ${isSelected ? "bg-gray-500 cursor-not-allowed" : "cursor-pointer bg-[#0A0F1D]"}`}
        disabled={isSelected}
        onClick={handleAdd}
      >
        {isSelected ? "Already added to stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
