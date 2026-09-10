import type { SelectedCardProps } from "../Interfaces/Props";

const SelectedCard = ({technology, selectedTechnologies, setSelectedTechnologies}: SelectedCardProps) => {

    const handleRemove = () => {
        setSelectedTechnologies(selectedTechnologies.filter(tech => tech.id !== technology.id));
    }
    
    return (
        <div className="flex justify-between items-center py-1 px-2.5 rounded-lg border border-solid border-[#E2E8F0]">
            <div className="flex items-center gap-6">
                <img src={technology.icon} className="w-10 h-10" alt="" />
                <div>
                    <h1 className="font-main font-bold text-[#0F172A] text-[20px]">{technology.name}</h1>
                    <p className="font-main font-normal text-[#94A3B8] text-[16px]">{technology.category}</p>
                </div>
            </div>
            <div className="cursor-pointer hover:text-[#D82C20]" onClick={handleRemove}>X</div>
        </div>
    );
};

export default SelectedCard;