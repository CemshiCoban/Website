interface TimelineItemProps {
  date: string;
  title: string;
  text: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, text }) => {
  return (
    <div className="timeline-item">
      <div className="circle-dot"></div>
      <h3 className="timeline-date">
        <i className="fa fa-calendar"></i> {date}
      </h3>
      <h4 className="timeline-title">{title}</h4>
      {text.map((paragraph, index) => (
        <p className="timeline-text" key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default TimelineItem;
