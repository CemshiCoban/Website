import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, isActive, icon, label, onClick }) => {
  return (
    <li onClick={onClick}>
      <Link to={to} className={isActive ? 'active' : ''}>
        <i className={`fa ${icon}`}></i>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
