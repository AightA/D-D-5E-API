import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Rules from '../../components/Rules';

global.fetch = vi.fn();

const mockSuccessResponse = {
	results: [
		{ name: 'Combat', url: '/api/rules/combat' },
		{ name: 'Appendix', url: '/api/rules/appendix' },
	],
};

const mockErrorResponse = new Error('Failed to fetch rules');

describe('Rules component', () => {
	it('Display loading text while fetching', async () => {
		fetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockSuccessResponse),
		});

		render(<Rules />);

		await waitFor(() =>
			expect(screen.getByText(/Loading in a moment.../i)).toBeInTheDocument()
		);
	});

	it('renders rules after successful fetch', async () => {
		fetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockSuccessResponse),
		});

		render(<Rules />);

		expect(await screen.findByText(/combat/i)).toBeInTheDocument();
		expect(await screen.findByText(/appendix/i)).toBeInTheDocument();
	});

	it('displays an error message when the fetch fails', async () => {
		fetch.mockRejectedValueOnce(mockErrorResponse);

		await act(async () => {
			render(<Rules />);
		});

		await waitFor(() => {
			expect(screen.getByText(/error/i)).toBeInTheDocument();
		});
	});
});
