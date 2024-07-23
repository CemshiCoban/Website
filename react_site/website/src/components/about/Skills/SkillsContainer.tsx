import { useState } from 'react';
import ButtonTemplate from '../../templates/ButtonTemplate';
import SkillCategory from './SkillCategory';

interface Skill {
  name: string;
  level: string;
  percentage?: string;
}

interface SkillsProps {
  categories: {
    [key: string]: Skill[];
  };
}

const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>('math');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="skill-container">
      <h3>Skills <span></span></h3>
      <div className="skill-buttons">
        {Object.keys(categories).map((category) => (
          <ButtonTemplate
            key={category}
            label={category.charAt(0).toUpperCase() + category.slice(1)}
            onClick={() => handleCategoryClick(category)}
            className={`skill-btn ${activeCategory === category ? 'active' : 'hide'}`}
          />
        ))}
      </div>
      {Object.keys(categories).map((category) => (
        <SkillCategory
          key={category}
          category={category}
          skills={categories[category]}
          isActive={activeCategory === category}
        />
      ))}
    </div>
  );
};

export default Skills;
