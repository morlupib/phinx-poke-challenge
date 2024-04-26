import { Container, Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonPage from "./components/PokemonPage";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Container maxWidth="md">
				<Typography variant="h4" marginY={3}>
					Battle of Pokemon
				</Typography>
				<PokemonPage />
			</Container>
		</QueryClientProvider>
	);
}

export default App;
