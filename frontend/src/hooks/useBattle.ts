import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { battlePokemons } from "../services/pokemonService";
import { battleDisabledAtom, winnerAtom } from "../store/store";
import { Pokemon } from "../types/types";

export const useBattle = () => {
	const [winner, setWinner] = useAtom(winnerAtom);
	const [battleDisabled, setBattleDisabled] = useAtom(battleDisabledAtom);

	const mutation = useMutation({
		mutationFn: battlePokemons,
	});

	const handleBattleStart = async (pokemon: Pokemon, opponent: Pokemon) => {
		if (!pokemon.id || !opponent.id) return;

		try {
			setBattleDisabled(true);

			const result = await mutation.mutateAsync({
				pokemon1Id: pokemon.id,
				pokemon2Id: opponent.id,
			});

			const pokemonWiner = result.winnerId === pokemon.id ? pokemon : opponent;
			setWinner(pokemonWiner);
		} catch (error) {
			console.error("Error on battle endpoint: ", error);
		} finally {
			setBattleDisabled(false);
		}
	};

	return { winner, startBattle: handleBattleStart, battleDisabled };
};
