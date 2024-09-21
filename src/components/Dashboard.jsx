import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
	{
		name: 'Spells',
		description: 'Discover a variety of spells available for your characters.',
		link: '/spells',
	},
	{
		name: 'Monsters',
		description: 'Browse through a collection of fearsome monsters.',
		link: '/monsters',
	},
	{
		name: 'Items',
		description: 'Explore various magical items and equipments.',
		link: '/items',
	},
	{
		name: 'Rules',
		description: 'Learn all the rules of the game.',
		link: '/rules',
	},
];
const Dashboard = () => {
	return (
		<main className="flex flex-col items-center p-6">
			<h1 className="text-3xl font-bold mb-8">D&D Dashboard</h1>
			<div className="grid grid-col-1 md:grid-col-3 gap-6">
				{sections.map((section) => (
					<div
						key={section.name}
						className="border p-4 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition duration-300"
					>
						<h2 className="text-xl font-semibold mb-2">{section.name}</h2>
						<p className="mb-4">{section.description}</p>
						<Link
							to={section.link}
							className="text-blue-500 hover:text-blue-700"
						>
							Go to {section.name}
						</Link>
					</div>
				))}
			</div>
		</main>
	);
};

export default Dashboard;
