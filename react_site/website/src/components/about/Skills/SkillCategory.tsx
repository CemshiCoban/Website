interface Skill {
  name: string;
  level: string;
  percentage?: string;
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  isActive: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills, isActive }) => {
  return (
    <div className={`skills padd-15 ${isActive ? 'active' : 'hidden'}`} id={category}>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="skill-item padd-15" key={index}>
            <h5>{skill.name}</h5>
            <div className="progress">
              <div
                className="progress-in"
                style={{ width: skill.percentage ? skill.percentage : '0%' }}
              ></div>
              <div className="skill-percent">{skill.level}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
