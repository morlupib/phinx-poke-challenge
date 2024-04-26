import { atom } from "jotai";
import { Pokemon } from "../types/types";

export const selectedPokemonAtom = atom<Pokemon | null>(null);
export const selectedOpponentAtom = atom<Pokemon | null>(null);
export const winnerAtom = atom<Pokemon | null>(null);
export const battleDisabledAtom = atom<boolean>(false);
