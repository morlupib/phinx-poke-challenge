import { useQuery } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";
import { getAllPokemons } from "../services/pokemonService";
import {
	selectedOpponentAtom,
	selectedPokemonAtom,
	winnerAtom,
} from "../store/store";
import { Pokemon } from "../types/types";

export const usePokemons = () => {
	const [selectedPokemon, setSelectedPokemon] = useAtom(selectedPokemonAtom);
	const [selectedOpponent, setSelectedOpponent] = useAtom(selectedOpponentAtom);
	const setWinner = useSetAtom(winnerAtom);

	const {
		data: pokemons,
		isLoading,
		error,
	} = useQuery<Pokemon[], Error>({
		queryKey: ["pokemons"],
		queryFn: getAllPokemons,
	});

	const selectPokemon = (pokemon: Pokemon) => {
		if (!pokemons) {
			return;
		}
		setWinner(null);
		setSelectedPokemon(pokemon);
		const availablePokemons = pokemons.filter((p) => p.id !== pokemon.id);
		const randomIndex = Math.floor(Math.random() * availablePokemons.length);
		const opponent = availablePokemons[randomIndex];
		setSelectedOpponent(opponent);
	};

	return {
		pokemons,
		isLoading,
		error,
		selectedPokemon,
		selectedOpponent,
		selectPokemon,
	};
};
