import type { ITechnology } from "./Types";

export interface CardsProps {
    technologiesPromise: Promise<ITechnology[]>
}