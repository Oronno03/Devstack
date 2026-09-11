import { toast } from "react-toastify";
import type { SelectedCardProps } from "../Interfaces/Props";

const SelectedCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedCardProps) => {
  const handleRemove = () => {
    setSelectedTechnologies(
      selectedTechnologies.filter((tech) => tech.id !== technology.id),
    );
    toast(`${technology.name} has been removed from your stack!`, {
      position: "bottom-right",
      autoClose: 2000,
      pauseOnHover: true,
      theme: "colored",
      type: "success",
    });
  };

  return (
    <div className="flex justify-between items-center py-1 px-2.5 rounded-lg border border-solid border-[#E2E8F0]">
      <div className="flex items-center gap-6">
        <img src={technology.icon} className="w-6 h-6 lg:w-10 lg:h-10" alt="" />
        <div>
          <h1 className="font-main font-bold text-[#0F172A] text-[12px] lg:text-[20px]">
            {technology.name}
          </h1>
          <p className="font-main font-normal text-[#94A3B8] text-[10px] lg:text-[16px]">
            {technology.category}
          </p>
        </div>
      </div>
      <div
        className="cursor-pointer hover:text-[#D82C20] text-[8px] md:text-[10px] lg:text-[16px] "
        onClick={handleRemove}
      >
        X
      </div>
    </div>
  );
};

export default SelectedCard;
