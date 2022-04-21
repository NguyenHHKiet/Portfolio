import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import { ImCircleDown } from 'react-icons/im'
import homeLogo from '../Assets/19362653-removebg-preview.png'
import './About.css'
import {
    DiReact,
    DiGithub,
    DiDjango,
    DiJava,
    DiVisualstudio,
} from 'react-icons/di';
import {
    SiFlask, SiNextdotjs, SiDotnet, SiVercel
} from 'react-icons/si';
import { CgCPlusPlus, CgYoutube } from 'react-icons/cg'

function About() {
  return (
    <Container fluid className='about-section'>
        <Container>
            <Row style={{ justifyContent:'center', padding: 30 }}>
                <Col md={5} style={{ justifyContent:'center', paddingTop:30, paddingBottom: 50 }}>
                    <h1 style={{ paddingBottom:20, fontSize:'2em' }}><strong>About Me</strong></h1>
                    <Card className='quote-card-view'>
                        <Card.Body>
                        <blockquote className="blockquote mb-2">
                            <p style={{ textAlign:'justify' }}>
                                Hi Everyone, I am <span className="purple">Hoang Kiet </span>from <span className="purple">Binh Phuoc, VietNam.</span>
                                <br />I am a student at Ho Chi Minh City Open University, I am pursuing a career in React Development.
                            </p>
                            <br/>
                            <ul>
                                <li className='about-activity'>
                                    <ImCircleDown/> Traveling
                                </li>
                                <li className='about-activity'>
                                    <ImCircleDown /> Ride a Bicycle
                                </li>
                                <li className='about-activity'>
                                    <ImCircleDown/> Watching Movies
                                </li>
                            </ul>
                        </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='about-img' md={5} style={{ paddingBottom: 50, paddingTop:120 }}>
                    <img
                        src={homeLogo}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    />
                </Col>
            </Row>
            <h1 className='project-heading' ><strong><span className='blue'>Languages Skills</span></strong></h1>
            <Row style={{ justifyContent:'center', paddingBottom: 30 }}>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiReact/>
                </Col>
            
                <Col xs={4} md={2} className='tech-icons'>
                    <DiDjango/>
                </Col>
            
                <Col xs={4} md={2} className='tech-icons'>
                    <DiJava/>
                </Col>

                <Col xs={4} md={2} className='tech-icons'>
                    <SiFlask/>
                </Col>
            
                <Col xs={4} md={2} className='tech-icons'>
                    <CgCPlusPlus/>
                </Col>

                <Col xs={4} md={2} className='tech-icons'>
                    <SiNextdotjs/>
                </Col>

                <Col xs={4} md={2} className='tech-icons'>
                    <SiDotnet/>
                </Col>
            </Row>

            <h1 className='project-heading'><strong><span className='blue'>Tool Build</span></strong></h1>
            <Row style={{ justifyContent:'center', paddingBottom: 30 }}>
                
                <Col xs={4} md={2} className='tech-icons'>
                    <DiVisualstudio/>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <SiVercel/>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <CgYoutube/>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiGithub/>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default About