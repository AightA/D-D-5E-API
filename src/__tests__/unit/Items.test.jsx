import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Items from '../../components/Items';

global.fetch = vi.fn();

const mockSuccessResponse = {
	results: [
		{
			name: 'Abacus',
			url: '/api/equipment/abacus',
		},
		{
			name: 'Amulet',
			url: '/api/equipment/amulet',
		},
	],
};

const mockErrorResponse = new Error('Failed to fetch items');

describe('Items component', () => {
	it('Display loading text while fetching', async () => {
		fetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockSuccessResponse),
		});

		render(<Items />);

		await waitFor(() =>
			expect(screen.getByText(/Loading in a moment.../i)).toBeInTheDocument()
		);
	});

	it('renders Items after successful fetch', async () => {
		fetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockSuccessResponse),
		});

		render(<Items />);

		expect(await screen.findByText(/Abacus/i)).toBeInTheDocument();
		expect(await screen.findByText(/Amulet/i)).toBeInTheDocument();
	});

	it('displays an error message when the fetch fails', async () => {
		fetch.mockRejectedValueOnce(mockErrorResponse);

		await act(async () => {
			render(<Items />);
		});

		await waitFor(() => {
			expect(screen.getByText(/error/i)).toBeInTheDocument();
		});
	});
});
