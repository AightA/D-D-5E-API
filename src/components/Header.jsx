import { Link } from 'react-router-dom';
import { FaDragon } from 'react-icons/fa';

const Header = () => {
	return (
		<header className="bg-red-500 text-white p-4 flex items-center">
			<Link to="/">
				<FaDragon className="mr-2 hover:text-violet-400" size={24} />
			</Link>
			<h1 className="text-3xl font-bold">Welcome to the D&D Dashboard</h1>
		</header>
	);
};

export default Header;
