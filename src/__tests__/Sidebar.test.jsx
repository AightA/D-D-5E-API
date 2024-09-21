import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('renders Sidebar component', () => {
	it('should display nav links names', () => {
		render(
			<MemoryRouter>
				<Sidebar />
			</MemoryRouter>
		);

		expect(screen.getByText('Spells')).toBeInTheDocument();
		expect(screen.getByText('Monsters')).toBeInTheDocument();
		expect(screen.getByText('Items')).toBeInTheDocument();
		expect(screen.getByText('Rules')).toBeInTheDocument();
	});

	it('checks the links are correct with href attributes', () => {
		render(
			<MemoryRouter>
				<Sidebar />
			</MemoryRouter>
		);

		expect(screen.getByRole('link', { name: 'Spells' })).toHaveAttribute(
			'href',
			'/spells'
		);
		expect(screen.getByRole('link', { name: 'Monsters' })).toHaveAttribute(
			'href',
			'/monsters'
		);

		expect(screen.getByRole('link', { name: 'Items' })).toHaveAttribute(
			'href',
			'/items'
		);
		expect(screen.getByRole('link', { name: 'Rules' })).toHaveAttribute(
			'href',
			'/rules'
		);
	});
});
