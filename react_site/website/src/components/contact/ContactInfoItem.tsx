interface ContactInfoItemProps {
  iconClass: string;
  title: string;
  content: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ iconClass, title, content }) => {
  return (
    <div className="contact-info-item padd-15">
      <div className="icon">
        <i className={`fa ${iconClass}`}></i>
      </div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default ContactInfoItem;
