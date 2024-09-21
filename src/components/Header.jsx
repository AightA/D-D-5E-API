import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="bg-red-500 text-white p-4">
			<Link to="/">
				<h1 className="text-3xl font-bold hover:text-violet-400">
					Welcome to the D&D Dashboard
				</h1>
			</Link>
		</header>
	);
};

export default Header;
