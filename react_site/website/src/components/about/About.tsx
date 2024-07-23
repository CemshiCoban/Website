import SectionTemplate from "../templates/SectionTemplate"

import AboutIntro from "./AboutIntro"
import PersonalInfo from "./PersonalInfo"
import SkillsContainer from "./Skills/SkillsContainer"
import Timeline from "./timeline/Timeline"

import infoItemsData from "./aboutData/infoItemsData"
import skillData from "./aboutData/skillsData"

const About: React.FC = () => {
    return(
        <SectionTemplate id="about" title='About Me' className="about">
            <div className="about-content padd-15">
                <AboutIntro/>
                <div className="row">
                <PersonalInfo items= {infoItemsData}/>
                <SkillsContainer categories={skillData} />
                </div>
                <Timeline/>
            </div>
        </SectionTemplate>
    )
}

export default About
