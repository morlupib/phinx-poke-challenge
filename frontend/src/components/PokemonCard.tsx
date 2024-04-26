import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { Pokemon } from "../types/types";
import { Stat } from "./ui/Stat";

interface PokemonCardProps {
	pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
	return (
		<Card
			sx={{ boxShadow: " 0px 3px 8px 0px rgba(0,0,0,0.20)" }}
			data-testid="pokemon-card-battle"
		>
			<CardMedia
				component="img"
				alt={pokemon.name}
				image={pokemon.imageUrl}
				sx={{
					height: 300,
					width: 300,
					objectFit: "cover",
					marginX: "auto",
				}}
			/>
			<CardContent>
				<Typography
					gutterBottom
					sx={{ borderBottom: "1px solid #ccc" }}
					variant="h5"
				>
					{pokemon.name}
				</Typography>
				<Stat value={pokemon.hp} text="HP" />
				<Stat value={pokemon.attack} text="Attack" />
				<Stat value={pokemon.defense} text="Defense" />
				<Stat value={pokemon.speed} text="Speed" />
			</CardContent>
		</Card>
	);
};

export default PokemonCard;
