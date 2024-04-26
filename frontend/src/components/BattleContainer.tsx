import { Box, Button } from "@mui/material";
import { FC } from "react";
import { useBattle } from "../hooks/useBattle";
import { usePokemons } from "../hooks/usePokemon";
import PokemonCard from "./PokemonCard";

const BattleContainer: FC = () => {
	const { selectedPokemon, selectedOpponent } = usePokemons();
	const { startBattle, battleDisabled } = useBattle();

	if (!selectedPokemon || !selectedOpponent) {
		return <div>Select a pokemon</div>;
	}

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			gap={3}
			width="100%"
		>
			<Box flexGrow={1}>
				<PokemonCard pokemon={selectedPokemon} />
			</Box>

			<Button
				variant="contained"
				color="success"
				size="large"
				disabled={battleDisabled}
				onClick={() => startBattle(selectedPokemon, selectedOpponent)}
			>
				Start Battle
			</Button>
			<Box flexGrow={1}>
				<PokemonCard pokemon={selectedOpponent} />
			</Box>
		</Box>
	);
};

export default BattleContainer;
