import SectionTemplate from "../templates/SectionTemplate"

import ContactInfoItem from "./ContactInfoItem"
import ContactForm from "./ContactForm"

import contactInfoData from "./contactData/contactData"

const Contact: React.FC = () => {
 return(
    <SectionTemplate title='Contact Me' className="contact" id = 'contact'>
      <h3 className="contact-title padd-15">Do You Have Any Questions?</h3>
      <h4 className="contact-sub-title padd-15">I'm Available Everyday</h4>
      <div className="row">
          {contactInfoData.map((info, index) => (
            <ContactInfoItem
              key={index}
              iconClass={info.iconClass}
              title={info.title}
              content={info.content}
            />
          ))}
        </div>
        <h3 className="contact-title padd-15">Send Me A Message</h3>
        <h4 className="contact-sub-title padd-15">I Answer Messages Quickly!</h4>
        <div className="row">
          <ContactForm />
        </div>  
    </SectionTemplate>
 )
}

export default Contact