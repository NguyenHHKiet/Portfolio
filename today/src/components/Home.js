import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../Assets/19362653-removebg-preview.png';
import './Home.css'
import Type from "./Type";
import myImg from '../Assets/Avatars - Default with Backdrop.png'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";



function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NGUYỄN HỮU HOÀNG KIỆT</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>

      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='blue'> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I can use canonical languages like
              <i>
                <b className='blue'> C#, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className='blue'>Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className='blue'>
                  Deep Learning
                </b>
                {" "}and{" "}
                <b className='blue'>
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp;like
              <i>
                <b className='blue'> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href='https://github.com/NguyenHHKiet'
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href='https://www.facebook.com/kiet.tonkhac/'
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href='https://www.instagram.com/qliphort.hk/'
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Home;