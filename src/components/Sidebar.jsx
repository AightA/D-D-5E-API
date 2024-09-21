import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const navList = ['spells', 'monsters', 'items', 'rules'];

	return (
		<nav className="bg-gray-700 w-24 min-h-screen text-white p-4 space-y-4">
			{navList.map((item, index) => {
				const firstItemUpperCase = item.split('')[0].toUpperCase();
				const restOfStringItem = item.slice(1, item.length);

				return (
					<ul key={index} className="space-y-4">
						<li>
							<Link
								to={`/${item}`}
								className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
							>
								{firstItemUpperCase.concat(restOfStringItem)}
							</Link>
						</li>
					</ul>
				);
			})}
		</nav>
	);
};

export default Sidebar;
