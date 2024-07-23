interface SkillItemProps {
  name: string;
  progress: number;
  level: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, progress, level }) => {
  return (
    <div className="skill-item padd-15">
      <h5>{name}</h5>
      <div className="progress">
        <div className="progress-in" style={{ width: `${progress}%` }}></div>
        <div className="skill-percent">{level}</div>
      </div>
    </div>
  );
};

export default SkillItem;
