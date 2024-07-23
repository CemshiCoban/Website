import { useState } from 'react';
import NavItem from './NavItem';

interface NavProps {
  items: {
    to: string;
    icon: string;
    label: string;
  }[];
}

const Nav: React.FC<NavProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul className="nav">
      {items.map((item, index) => (
        <NavItem
          key={index}
          to={item.to}
          icon={item.icon}
          label={item.label}
          isActive={index === activeIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </ul>
  );
};

export default Nav;
