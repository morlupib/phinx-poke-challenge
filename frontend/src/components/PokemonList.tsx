import { Box, Card, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { usePokemons } from "../hooks/usePokemon";

const PokemonList: FC = () => {
	const { pokemons, isLoading, error, selectPokemon } = usePokemons();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading all Pokemons</div>;
	if (!pokemons) return <div>Pokemons not found</div>;

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			flexWrap="wrap"
			gap={2}
			width="100%"
		>
			{pokemons.map((pokemon) => (
				<Card
					key={pokemon.id}
					onClick={() => selectPokemon(pokemon)}
					sx={{
						cursor: "pointer",
						boxShadow: " 0px 3px 8px 0px rgba(0,0,0,0.20)",
					}}
				>
					<Box flex={1} alignItems="center">
						<CardMedia
							component="img"
							alt={pokemon.name}
							image={pokemon.imageUrl}
							sx={{
								height: 140,
								width: 140,
								objectFit: "cover",
								objectPosition: "center",
								marginX: 1,
							}}
						/>
						<Typography gutterBottom variant="subtitle1" sx={{ px: 1 }}>
							{pokemon.name}
						</Typography>
					</Box>
				</Card>
			))}
		</Box>
	);
};

export default PokemonList;
