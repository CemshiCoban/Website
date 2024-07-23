interface SectionTemplateProps {
  id: string;
  title?:string;
  children: React.ReactNode;
  className?: string;
}

const SectionTemplate: React.FC<SectionTemplateProps> = ({ id, title, children, className = '' }) => {
  return (
    <section className={`${className} section`} id={id}>
      <div className="container">
        <div className="row">
          {title && <div className="section-title padd-15">
                <h2>{title}</h2>
              </div>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionTemplate;
