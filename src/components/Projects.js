import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import CAPM from "../assets/img/CAPM.png";
import FINDB from "../assets/img/FINDB.png";
import FL from "../assets/img/FL.png";
import PF from "../assets/img/PF.png";
import RUT from "../assets/img/RUT.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      link: "https://github.com/yg2005/FlappyBird-Neural-Network-From-Scratch",
      title: "FlappyBird AI",
      description: "Neural Network from Scratch to perform natural selection over generations. Developed a custom perceptron model for input-output mapping.",
      imgUrl: FL,
    },
    {
      link: "https://findb.vercel.app/",
      title: "Revenue and Expense Prediction Model",
      description: "Regression Model with ML",
      imgUrl: FINDB,
    },
  ];
  const projects2 = [
    {
      link: "https://ruturbo.com/",
      title: "RU Turbo",
      description: "Strategy & Marketing | Course Registration Enhancer for Rutgers Students",
      imgUrl: RUT,
    },
    {
      link: "https://preview--academic-journey-navigator.lovable.app/auth",
      title: "PathFinder - Coming Soon",
      description: "Design & Development | AI Powered 4 Year Course Planner for Rutgers Students",
      imgUrl: PF,
    },
  ];
  const projects3 = [
    {
      link: "https://ygcapm.streamlit.app/",
      title: "CAPM Analysis EduSite",
      description: "Financial model that helps investors understand the relationship between expected return and risk for a given stock.",
      imgUrl: CAPM,
    },
    {
      link: "https://findb.vercel.app/",
      title: "FinDB",
      description: "Designed to give businesses actionable insights into their financial data through advanced analytics and intuitive visualizations.",
      imgUrl: FINDB,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my Software Projects where I apply Machine Learning, AI, and Full Stack Software Engineering to solve real-world problems. My work is to create efficient, scalable solutions that drive value and benefit the Finance and Tech fields.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">SWE Startups</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Machine Learning & AI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Finance</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
