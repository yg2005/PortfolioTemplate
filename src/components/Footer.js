import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="d-flex align-items-center">
            <img src={logo} alt="Logo" />
            <div className="social-icon ms-3">
              <a href="https://www.linkedin.com/in/yg13"><img src={navIcon1} alt="LinkedIn Icon" /></a>
              <a href="https://github.com/yg2005"><img src={navIcon2} alt="GitHub Icon" /></a>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
