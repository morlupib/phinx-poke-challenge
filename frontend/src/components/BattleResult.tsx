import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import { Pokemon } from "../types/types";

interface BattleResultProps {
	winner: Pokemon;
}

const BattleResult: FC<BattleResultProps> = ({ winner }) => {
	return (
		<Card
			sx={{
				width: "100%",
				backgroundColor: "#e4f9fe",
				border: 2,
				boxShadow: " 0px 3px 8px 0px rgba(0,0,0,0.20)",
			}}
		>
			<CardContent sx={{ padding: 3 }}>
				<Typography variant="h5" data-testid="battle-result">
					{winner.name} wins!
				</Typography>
			</CardContent>
		</Card>
	);
};

export default BattleResult;
