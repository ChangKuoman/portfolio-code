import { Row, Col, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6}>
                        <span className='nav-name-bigger'>Samanta Chang</span>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/chang-kuoman/" target="_blank"><img src={navIcon1} alt=""/></a>
                        <a href="https://github.com/ChangKuoman" target="_blank"><img src={navIcon2} alt=""/></a>
                        <a href="https://www.instagram.com/chang.kuoman" target="_blank"><img src={navIcon3} alt=""/></a>
                    </div>
                        <p>CopyRight 2025. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}