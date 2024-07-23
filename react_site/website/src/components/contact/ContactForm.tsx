import React, { useState } from 'react';
import FormItem from './FormItem';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const formItems: { type: string; placeholder: string; name: string; colSize: 'col-12' | 'col-6' }[] = [
    { type: 'text', placeholder: 'Name', name: 'name', colSize: 'col-6' },
    { type: 'text', placeholder: 'Email', name: 'email', colSize: 'col-6' },
    { type: 'text', placeholder: 'Subject', name: 'subject', colSize: 'col-12' },
    { type: 'textarea', placeholder: 'Message', name: 'message', colSize: 'col-12' }
  ];

  return (
    <form className="contact-form padd-15" onSubmit={handleSubmit}>
      <div className="row">
        {formItems.map((item, index) => (
          <FormItem
            key={index}
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            value={formData[item.name as keyof typeof formData]}
            onChange={handleChange}
            colSize={item.colSize}
            isTextarea={item.type === 'textarea'}
          />
        ))}
      </div>
      <div className="row">
        <div className="form-item col-12 padd-15">
          <div className="form-group">
            <button type="submit" className="btn">Send Message</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
