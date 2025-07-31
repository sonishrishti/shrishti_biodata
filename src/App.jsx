import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css'
import timelineElements from './timelineElements';
import { FaLaptopCode } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { PiHandsPrayingFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function App() {
  let IconStyle = {background: "rgb(255, 153, 1)"};
  let workIconimg = <FaLaptopCode />;
  let eduIconimg = <PiStudentFill />;
  let namaste = <PiHandsPrayingFill />;
  let websiteicon = <CgWebsite />;
  let insta = <FaInstagram />;
  let linkedin = <AiFillLinkedin />;


  {/*Right side of the shaadi formula*/}
  const [madj] = useTypewriter({
    words: ['Seva', 'Team work', 'Adjustment', 'Forever'],
    loop:{},
    typeSpeed: 100,
  });

  return (
    <>
      <div className="app-container">
        <div className="intro">
          <h1>Jai Shri Krishna {namaste}</h1>
          <p className="name">I am Shrishti Soni. </p>
          <p className = "sub">and you are entering my world!</p>
        </div>
        <div className="scroll-down-arrow">
          <FaChevronDown />
        </div>
      </div>

      <div className="second-section">
        <div className="education">
          <h1>My life</h1>
          <VerticalTimeline>
            {
              timelineElements.map(element => {
                let isworkIcon = element.icon === "work";
                return (
                  <VerticalTimelineElement
                    contentStyle={{ background: '#F5F5DC', color:'#000000', borderStyle: "dashed", borderColor: "rgb(255, 153, 1)"}}
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={IconStyle}
                    icon = {isworkIcon? workIconimg : eduIconimg}
                  >
                    <h3 className="vertical-timeline-element-title">{element.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      <i>{element.course}</i>
                    </h4>
                    <h5 className="vertical-timeline-element-subtitle">
                      {element.location}
                    </h5>
                    <p id="description">
                      {element.description}
                    </p>
                  </VerticalTimelineElement>
                )
              })
            }
          </VerticalTimeline>
        </div>        
      </div>

      <div className = "aboutme">
        <div className = "heading">
          <h1>What do I like apart from my Lala?</h1>
        </div>
        <div className="list">
          <p className="centered-left-text">
            1. Hari naam, hari katha. <br />
            2. Authentic Indian desserts made with love <b><i>at home</i></b>. <br />
            3. Longgg, serene drives. <br />
            4. Cooking for my loved ones!<br/>
            5. Constantly trying out new/old things. 
          </p>
        </div>
      </div>

      <div className = "marriage">
        <div className = "mheading">
          <h1> What is shaadi for me?</h1>
        </div>
        <h1 className = "mformula">
          Shaadi =  {"\u00A0"} {/*Adding space*/}
          <span>
            {madj}
          </span>
          <Cursor/>
        </h1>
      </div>

      <div className="contact">
        <h1>Where can you connect?</h1>
        <div className="contact-links">
          <a href="https://www.divydishaa.com/" className="card">{websiteicon} DivyDishaa Web</a>
          <a href="https://www.instagram.com/divydishaa/" className="card">{insta} DivyDishaa Insta</a>
          <a href="https://www.instagram.com/tookthebaitfm/" className="card">{insta} Took the bait?</a>
          <a href="https://www.linkedin.com/in/shrishti-soni/" className="card">{linkedin} Linkedin</a>
        </div>
      </div>
    </>

  );
}

export default App
