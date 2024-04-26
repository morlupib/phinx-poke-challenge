export interface Pokemon {
	id: string;
	name: string;
	attack: number;
	defense: number;
	hp: number;
	speed: number;
	type: string;
	imageUrl: string;
}

export interface BattleResult {
	winnerId: string;
	loserId: string;
}
