import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import SectionTemplate from '../templates/SectionTemplate';
import ButtonTemplate from '../templates/ButtonTemplate';

const Home: React.FC = () => {
    const typingElement = useRef<HTMLSpanElement>(null);
  
    useEffect(() => {
      const options = {
        strings: ['Mathematician', 'Graphic Designer', 'Backend Developer'],
        typeSpeed: 50,
        backSpeed: 100,
        loop: true
      };
  
      const typed = new Typed(typingElement.current!, options);
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <SectionTemplate id="home" className="home">
        <div className="row">
          <div className="home-info padd-15">
              <h3 className="hello">
                Hello, my name is
                <span className="name"> Deniz Cemal Yılmazsoy</span>
              </h3>
              <h3 className="my-profession">
                I'm a <span className="typing" ref={typingElement}></span>
              </h3>
              <p>
                Passionate mathematician, graphic designer, and backend
                developer driven by a love for math, design, and coding.
                Committed to crafting innovative solutions with creativity and
                technical expertise.
              </p>
              <ButtonTemplate 
                label="Download CV" 
                href="/images/cv.pdf" 
                className="btn" 
                download 
            />
            </div>
            <div className="home-img padd-15">
              <img src="../../assets/deniz.png" alt="Deniz Cemal Yılmazsoy" />
            </div>
        </div>
      </SectionTemplate>
    );
  };
  
  export default Home;
  