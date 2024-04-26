import axios from "axios";
import { BattleResult, Pokemon } from "../types/types";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getAllPokemons = async (): Promise<Pokemon[]> => {
	const response = await axios.get<Pokemon[]>(`${baseUrl}/pokemon`);
	return response.data;
};

export const battlePokemons = async (pokemons: {
	pokemon1Id: string;
	pokemon2Id: string;
}): Promise<BattleResult> => {
	const response = await axios.post<BattleResult>(
		`${baseUrl}/battle`,
		pokemons
	);
	return response.data;
};
