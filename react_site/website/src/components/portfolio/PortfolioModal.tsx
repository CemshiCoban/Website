import { useEffect, useRef } from 'react';
import { Project } from "./portfolioData/projectType";

interface PortfolioModalProps {
  project: Project;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="portfolio-modal">
      <div className="modal-content" ref={modalRef}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default PortfolioModal;
