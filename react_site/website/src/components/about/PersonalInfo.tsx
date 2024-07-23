import React from 'react';
import PersonalInfoItem from './PersonalInfoItem';
import ButtonTemplate from '../templates/ButtonTemplate';

interface InfoItemProps {
    label: string;
    value: string;
  }
  
  interface PersonalInfoProps {
    items: InfoItemProps[];
  }
  

const PersonalInfo: React.FC<PersonalInfoProps> = ({items}) => {
  return (
    <div className="personal-info padd-15">
      <div className="row">
        {items.map((item, index) => (
          <PersonalInfoItem key={index} label={item.label} value={item.value} />
        ))}
      </div>
      <div className="row">
        <div className="buttons padd-15">
          <ButtonTemplate 
            label="Contact Me" 
            href="/contact" 
            className="btn hire-me" 
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
