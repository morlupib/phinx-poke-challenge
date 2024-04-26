import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useBattle } from "../hooks/useBattle";
import BattleContainer from "./BattleContainer";
import BattleResult from "./BattleResult";
import PokemonList from "./PokemonList";

const PokemonPage: FC = () => {
	const { winner } = useBattle();

	return (
		<main>
			<Typography variant="h5" marginY={1}>
				Select your pokemon
			</Typography>
			<Box
				display="flex"
				alignItems="center"
				flexWrap="wrap"
				flexDirection="column"
				gap={4}
			>
				<PokemonList />
				{winner && <BattleResult winner={winner} />}
				<BattleContainer />
			</Box>
		</main>
	);
};

export default PokemonPage;
