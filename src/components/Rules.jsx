import { useEffect, useState } from 'react';

const Rules = () => {
	const [rules, setRules] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRulesAPI = async () => {
			try {
				const res = await fetch('https://www.dnd5eapi.co/api/rules/');
				if (!res.ok) throw new Error('Failed to fetch rules');

				const data = await res.json();
				const uniqueRules = Array.from(
					new Set(data.results.map((rule) => rule.name))
				).map((name) => data.results.find((rule) => rule.name === name));
				setRules(uniqueRules);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchRulesAPI();
	}, []);

	if (loading) return <div>Loading in a moment...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold">Rules</h1>
			<p className="my-2">Here's are the rules of the game.</p>
			<ul className="list-disc pl-5">
				{rules?.map((rule, index) => (
					<li key={index} className="mb-2">
						{rule.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Rules;
