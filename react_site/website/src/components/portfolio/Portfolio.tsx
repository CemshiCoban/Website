import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';
import portfolioData from './portfolioData/portfolioData';
import { Project } from './portfolioData/projectType';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleItemClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects :</h2>
          </div>
        </div>
        <div className="row">
          {portfolioData.map((project, index) => (
            <PortfolioItem
              key={index}
              project={project}
              onClick={() => handleItemClick(project)}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <PortfolioModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Portfolio;
