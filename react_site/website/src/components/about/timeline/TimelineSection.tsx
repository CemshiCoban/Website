import TimelineBox from './TimelineBox';

interface TimelineSectionProps {
  title: string;
  items: { date: string; title: string; text: string[] }[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ title, items }) => {
  return (
    <div className={`${title.toLowerCase()} padd-15`}>
      <h3 className="title">{title}</h3>
      <div className="row">
        <TimelineBox items={items} />
      </div>
    </div>
  );
};

export default TimelineSection;
