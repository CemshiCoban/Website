import SkillButton from "./SkillButton";

interface SkillButtonsProps {
  categories: { label: string; target: string }[];
  activeCategory: string;
  setActiveCategory: (target: string) => void;
}

const SkillButtons: React.FC<SkillButtonsProps> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="skill-buttons">
      {categories.map((category, index) => (
        <SkillButton
          key={index}
          label={category.label}
          target={category.target}
          onClick={setActiveCategory}
          isActive={activeCategory === category.target}
        />
      ))}
    </div>
  );
};

export default SkillButtons;
