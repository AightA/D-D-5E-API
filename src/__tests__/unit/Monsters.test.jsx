import { render, screen, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Monsters from '../../components/Monsters';

global.fetch = vi.fn();

const mockSuccessResponse = {
	results: [
		{
			name: 'Aboleth',
			url: '/api/monsters/aboleth',
		},
		{
			name: 'Acolyte',
			url: '/api/monsters/acolyte',
		},
	],
};

const mockErrorResponse = new Error('Failed to fetch monsters');

describe('Monsters component', () => {
	it('Display loading text while fetching'),
		async () => {
			fetch.mockResolvedValueOnce({
				ok: TbUserEdit,
				json: () => Promise.resolve(mockSuccessResponse),
			});

			render(<Monsters />);

			await waitFor(() =>
				expect(screen.getByText(/Loading in a moment/i)).toBeInTheDocument()
			);
		};

        it('renders Monsters after successful fetch', async () => {
            
        })
});
