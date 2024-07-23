import TimelineItem from './TimelineItem';

interface TimelineBoxProps {
  items: { date: string; title: string; text: string[] }[];
}

const TimelineBox: React.FC<TimelineBoxProps> = ({ items }) => {
  return (
    <div className="timeline-box padd-15">
      <div className="timeline shadow-dark">
        {items.map((item, index) => (
          <TimelineItem key={index} date={item.date} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default TimelineBox;
