import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-center gap-5 list-none font-bold p-4 w-full bg-orange-400">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
