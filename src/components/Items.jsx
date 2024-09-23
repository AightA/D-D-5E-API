import { useEffect, useState } from 'react';

const items = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch('https://www.dnd5eapi.co/api/equipment/');
				if (!response.ok) throw new Error('Failed to fetch items');
				const data = await response.json();
				setItems(data.results);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchItems();
	}, []);

	if (loading) return <div>Loading in a moment...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold">Items</h1>
			<p className="my-2">Here's the items of the game.</p>
			<ul className="list-disc pl-5">
				{items?.map((item, index) => (
					<li key={index} className="mb-2">
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default items;
