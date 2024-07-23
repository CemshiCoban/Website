interface ButtonTemplateProps {
  label: string;
  onClick?: () => void;
  className?: string;
  href?: string;
  download?: boolean;
}

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({ label, onClick, className, href, download }) => {
  if (href) {
    return (
      <a href={href} className={`btn ${className}`} download={download}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {label}
    </button>
  );
};

export default ButtonTemplate;
