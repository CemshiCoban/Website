import ButtonTemplate from "../../templates/ButtonTemplate";

interface SkillButtonProps  {
  label: string;
  target: string;
  onClick: (target: string) => void;
  isActive: boolean;
}

const SkillButton: React.FC<SkillButtonProps> = ({ label, target, onClick, isActive }) => {
  return (
    < ButtonTemplate 
    label={label} 
    onClick={() => onClick(target)}
    className={`skill-btn ${isActive ? 'active' : ''}`}/>
  );
};

export default SkillButton