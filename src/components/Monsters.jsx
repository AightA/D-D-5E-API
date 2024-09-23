import { useEffect, useState } from 'react';

const Monsters = () => {
	const [monsters, setMonsters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchMonsters = async () => {
			try {
				const res = await fetch('https://www.dnd5eapi.co/api/monsters/');
				if (!res.ok) throw new Error('Failed to fetch monsters');
				const data = await res.json();
				setMonsters(data.results);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchMonsters();
	}, []);

	if (loading) return <div>Loading monsters in a moment...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold">Monsters</h1>
			<p className="my-2">Here's all the monsters.</p>
			<ul className="list-disc pl-5">
				{monsters.map((monster, index) => (
					<li key={index} className="mb-2">
						{monster.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Monsters;
