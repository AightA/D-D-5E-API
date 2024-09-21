import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
	it('renders correctly', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);

		const headerTag = screen.getByRole('banner');
		expect(headerTag).toBeInTheDocument();

		const headerElement = screen.getByText('Welcome to the D&D Dashboard');
		expect(headerElement).toBeInTheDocument();
	});
});
