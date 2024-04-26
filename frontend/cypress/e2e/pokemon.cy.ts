describe("Pokemon Battle", () => {
	beforeEach(() => {
		cy.visit("http://localhost:5173/");
	});

	it("displays pokemon list", () => {
		cy.get('[data-testid="pokemon-card"]').should("have.length", 5);
		cy.contains("h6", "Pikachu").should("exist");
	});

	it("shows pokemon battle", () => {
		cy.get('[data-testid="pokemon-card"]').first().click();
		cy.get('[data-testid="pokemon-card-battle"]').should("have.length", 2);
		cy.get('[data-testid="pokemon-card-battle"]').first().contains("Pikachu");
		cy.get('[data-testid="pokemon-card-battle"]').first().contains("HP");
		cy.get('[data-testid="pokemon-card-battle"]').first().contains("Attack");
		cy.get('[data-testid="pokemon-card-battle"]').first().contains("Defense");
		cy.get('[data-testid="pokemon-card-battle"]').first().contains("Speed");
	});

	it("shows pokemon battle result", () => {
		cy.get('[data-testid="pokemon-card"]').first().click();
		cy.get("button").contains("Start Battle").click();
		cy.contains('[data-testid="battle-result"]', "Pikachu wins!");
	});
});
