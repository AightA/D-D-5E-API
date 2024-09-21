import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Navigation and rendering', () => {
	it('should renders the dashboard on the default route', async () => {
		render(<App />, { wrapper: BrowserRouter });

		const user = userEvent.setup();
		const dashboardElements = screen.getAllByText('D&D Dashboard');

		dashboardElements.forEach((element) => {
			expect(element).toBeInTheDocument();
		});

		// Find the Spells link using the 'link' role and the name 'Spells'
		const spellsLink = screen.getByRole('link', { name: 'Spells' });
		await user.click(spellsLink);

		// Check if the Spells page content is rendered
		expect(screen.getByText('Spells')).toBeInTheDocument();
	});

	it('shows 404 page on unknown routes', () => {
		render(
			<MemoryRouter initialEntries={['/unknown']}>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByText(/page not found/i)).toBeInTheDocument();
	});
});

describe('render based on links ', () => {
	it('should render the spells page', () => {
		render(
			<MemoryRouter initialEntries={['/spells']}>
				<App />
			</MemoryRouter>
		);

		const spellsElements = screen.getAllByText('Spells');

		spellsElements.forEach((element) => {
			expect(element).toBeInTheDocument();
		});
		// expect(screen.getAllByText('Spells')).toBeInTheDocument();
	});

	it('should render monsters page', () => {
		render(
			<MemoryRouter initialEntries={['/monsters']}>
				<App />
			</MemoryRouter>
		);
		const monsterElements = screen.getAllByText('Monsters');

		monsterElements.forEach((element) => {
			expect(element).toBeInTheDocument();
		});
		// expect(screen.getAllByText('Monsters')).toBeInTheDocument();
	});

	it('should render items page', () => {
		render(
			<MemoryRouter initialEntries={['/items']}>
				<App />
			</MemoryRouter>
		);
		const itemsElements = screen.getAllByText('Items');

		itemsElements.forEach((element) => {
			expect(element).toBeInTheDocument();
		});
		// expect(screen.getAllByText('Items')).toBeInTheDocument();
	});

	it('should render rules page', () => {
		render(
			<MemoryRouter initialEntries={['/rules']}>
				<App />
			</MemoryRouter>
		);

		const rulesElements = screen.getAllByText('Rules');

		rulesElements.forEach((element) => {
			expect(element).toBeInTheDocument();
		});
		// expect(screen.getAllByText('Rules')).toBeInTheDocument();
	});
});
