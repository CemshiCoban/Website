interface ServiceItemProps {
  iconClass: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ iconClass, title, description }) => {
  return (
    <div className="service-item padd-15">
      <div className="service-item-inner">
        <div className="icon">
          <i className={`fa ${iconClass}`}></i>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
