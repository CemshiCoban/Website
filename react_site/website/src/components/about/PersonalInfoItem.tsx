interface InfoItemProps {
  label: string;
  value: string;
}

const PersonalInfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  return (
    <div className="info-item padd-15">
      <p>{label}: <span>{value}</span></p>
    </div>
  );
};

export default PersonalInfoItem;
