interface FormItemProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
  colSize?: 'col-12' | 'col-6';
}

const FormItem: React.FC<FormItemProps> = ({ type, placeholder, name, value, onChange, isTextarea = false, colSize = 'col-12' }) => {
  return (
    <div className={`form-item ${colSize} padd-15`}>
      <div className="form-group">
        {isTextarea ? (
          <textarea
            className="form-control"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          ></textarea>
        ) : (
          <input
            type={type}
            className="form-control"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

export default FormItem;
