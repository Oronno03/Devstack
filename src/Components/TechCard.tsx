import type { TechCardProps } from "../Interfaces/Props";

const TechCard = ({technology, selectedTechnologies, setSelectedTechnologies}: TechCardProps) => {

    const handleAdd = () => {
        if(selectedTechnologies.some(tech => tech.id == technology.id)) return;
        setSelectedTechnologies([...selectedTechnologies, technology]);
    }

    return (
        <div className="flex flex-col gap-4 border-2 border-solid border-[#F1F5F9] rounded-2xl relative p-5">
            <div className="flex justify-between">
                <img src={technology.icon} alt="" className="w-8 h-8"/>
                <p className="bg-[#F0F9FF] text-[#0EA5E9] py-0.5 px-2.5 rounded-full">{technology.badge}</p>
            </div>
            <h1 className="font-main font-bold text-[18px]">{technology.name}</h1>
            <p className="font-mail font-normal text-[12px] text-[#64748B]">{technology.description}</p>
            <div className="h-[1px] w-full bg-[#F1F5F9]"></div>
            <div className="flex justify-between items-center">
                <p className="font-main text-[#475569] px-4 py-0.5 bg-[#F1F5F980] text-[11px]">{technology.category}</p>
                <p className="font-main text-[#475569] text-[11px]">{technology.difficulty}</p>
                <p>⭐ {technology.rating}</p>
            </div>
            <button className="cursor-pointer font-main bg-[#0A0F1D] text-white py-2.5 rounded-lg text-[11px]" onClick={handleAdd}>Add To Stack</button>
        </div>
    );
};

export default TechCard;