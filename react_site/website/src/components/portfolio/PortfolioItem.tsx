import { Project } from './portfolioData/projectType';

interface PortfolioItemProps {
  project: Project;
  onClick: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project, onClick }) => {
  return (
    <div className="portfolio-item padd-15" onClick={onClick}>
      <div className="portfolio-item-inner shadow-dark">
        <div className="portfolio-img">
          <img src={project.image} alt={project.title} />
        </div>
        <h4>{project.title}</h4>
      </div>
    </div>
  );
};

export default PortfolioItem;
