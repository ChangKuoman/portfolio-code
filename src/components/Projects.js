import { Nav, Row, Col, Container, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";

import hackImg1 from "../assets/img/hackathon-img1.png";
import hackImg2 from "../assets/img/hackathon-img2.png";
import hackImg3 from "../assets/img/hackathon-img3.png";

import schoolImg1 from "../assets/img/school-img1.png";
import schoolImg2 from "../assets/img/school-img2.png";
import schoolImg3 from "../assets/img/school-img3.png";

import placeholder from "../assets/img/placeholder.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: 'Foca-Bot',
            description: 'Description of project one',
            imgUrl: projImg1,
            link: 'https://github.com/ChangKuoman/discord-bot'
        }
    ];

    const hackathons = [
        {
            title: 'TopAIcal',
            description: 'Description of project one',
            imgUrl: hackImg1,
            link: 'https://devpost.com/software/topaical'
        },
        {
            title: 'Ayllu',
            description: 'Description of project one',
            imgUrl: hackImg2,
            link: 'https://devpost.com/software/ayllu'
        },
        {
            title: 'TWIDDDS',
            description: 'Description of project one',
            imgUrl: hackImg3,
            link: 'https://devpost.com/software/twiddds'
        }
    ];

    const school = [
        {
            title: 'MNIST++',
            description: 'Description of project one',
            imgUrl: schoolImg1,
            link: 'https://github.com/CS1103/MNISTplusplus'
        },
        {
            title: 'MentorMatch',
            description: 'Description of project one',
            imgUrl: schoolImg2,
            link: 'https://github.com/ChangKuoman/MentorMatch'
        },
        {
            title: 'UTEC Computers',
            description: 'Description of project one',
            imgUrl: schoolImg3,
            link: 'https://github.com/ChangKuoman/UTEC_COMPUTERS'
        },
        {
            title: 'Análisis UTEC',
            description: 'Description of project one',
            imgUrl: placeholder,
            link: 'https://example.com'
        },
        {
            title: 'AWS Puntaje',
            description: 'Description of project one',
            imgUrl: placeholder,
            link: 'https://example.com'
        }
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
                                <p>Explore my projects, hackathon contributions, and school projects below.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Projects</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Hackathons</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">School Projects</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey={"first"}>
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
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
                                        <Tab.Pane eventKey={"second"}>
                                            <Row>
                                                {
                                                    hackathons.map((project, index) => {
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
                                        <Tab.Pane eventKey={"third"}>
                                            <Row>
                                                {
                                                    school.map((project, index) => {
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
        </section>
    )
}