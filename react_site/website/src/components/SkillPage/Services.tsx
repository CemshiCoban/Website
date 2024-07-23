import SectionTemplate from '../templates/SectionTemplate';
import ServiceItem from './ServiceItem';

import skillsData from './skillsData/skillsData';

const Services: React.FC = () => {
    return (
      <SectionTemplate title='Skills' id="services" className="service">
        <div className="row">
          {skillsData.map((service, index) => (
            <ServiceItem
              key={index}
              iconClass={service.iconClass}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </SectionTemplate>
    );
  };
  
  export default Services;
  