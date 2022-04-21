import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} HoangKiet</h3>
        </Col>

        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                href='https://github.com/NguyenHHKiet'
                style={{ color: "white" }}
                target="_blank" 
                rel='noreferrer'
              >
                <AiFillGithub />
              </a>
            </li>

            <li className='social-icons'>
              <a
                href='https://www.facebook.com/kiet.tonkhac/'
                style={{ color: "white" }}
                target="_blank" 
                rel='noreferrer'
              >
                <AiFillFacebook />
              </a>
            </li>

            <li className='social-icons'>
              <a
                href='https://www.instagram.com/qliphort.hk/'
                style={{ color: "white" }}
                target="_blank" 
                rel='noreferrer'
              >
                <AiFillInstagram />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer