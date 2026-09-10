import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "./Types";

export interface AllCardsProps {
    technologiesPromise: Promise<ITechnology[]>
    selectedTechnologies: ITechnology[],
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>
}

export interface YourStackProps {
    selectedTechnologies: ITechnology[],
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>
}

export interface TechCardProps {
    technology: ITechnology,
    selectedTechnologies: ITechnology[],
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>
}

export interface SelectedCardProps {
    technology: ITechnology,
    selectedTechnologies: ITechnology[],
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>
}