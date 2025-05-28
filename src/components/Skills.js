import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx wow">
                            <h2>
                                Skills
                            </h2>
                            <p>Here are some of the technologies I have experience with:</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg" alt="python"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg" alt="r"/>
                                    <h5>R</h5>
                                </div>
                                <div className="item">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql"/>
                                    <h5>PostgreSQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}