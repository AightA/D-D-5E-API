import { useEffect, useState } from 'react';

const Spells = () => {
	const [spells, setSpells] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchSpells = async () => {
			try {
				const res = await fetch('https://www.dnd5eapi.co/api/spells/');
				if (!res.ok) throw new Error('Failed to fetch spells');
				const data = await res.json();
				setSpells(data.results);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchSpells();
	}, []);

	if (loading) return <div>Loading spells in a moment...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold">Spells</h1>
			<p className="my-2">
				Here's all the spells that you would require for your characters.
			</p>
			<ul className="list-disc pl-5">
				{spells.map((spell, index) => (
					<li key={index} className="mb-2">
						{spell.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Spells;
