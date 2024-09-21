import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Spells from './components/Spells';
import Monsters from './components/Monsters';
import Items from './components/Items';
import Rules from './components/Rules';

const App = () => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex-grow">
				<Header />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/spells" element={<Spells />} />
					<Route path="/items" element={<Items />} />
					<Route path="/monsters" element={<Monsters />} />
					<Route path="/rules" element={<Rules />} />
					<Route path="*" element={<div>Page Not Found</div>} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
