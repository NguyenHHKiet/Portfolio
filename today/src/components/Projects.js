import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Projects.css'
import ProjectCard from './ProductCard'

function Projects() {
  return (
    <Container fluid className='project-section'>
        <Container>
            <h1 className='project-heading' style={{textAlign:'center'}} >My Projects <strong><span className='blue'>Working</span></strong></h1>
            <h4 style={{ color: 'white', textAlign:'center'}}>These are the projects I worked on while at school and recently at home.</h4>
            <Row style={{ justifyContent:'center', paddingBottom: 30 }}>
                <Col md={6} className='project-card'>
                    <ProjectCard
                        img='1'
                        title='Portfolio'
                        description='A portfolio is a living and changing collection of records that reflect your accomplishments, skills, experiences, and attributes. It highlights and showcases samples of some of your best work, along with life experiences, values and achievements.'
                        link='https://github.com/NguyenHHKiet/Portfolio/tree/main/today'
                    />
                </Col>
                <Col md={6} className='project-card'>
                    <ProjectCard
                        img='2'
                        title='Restro-Restaurant'
                        description='A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.'
                        link='https://github.com/NguyenHHKiet/Restro-Restaurant/tree/main/restro'
                    />
                </Col>
                <Col md={6} className='project-card'>
                    <ProjectCard
                        img='3'
                        title='ZenflowerShop'
                        description="A shopping cart on an online retailer's site is a piece of software that facilitates the purchase of a product or service. It accepts the customer's payment and organizes the distribution of that information to the merchant, payment processor and other parties."
                        link='https://github.com/NguyenHHKiet/ZenflowerShop/tree/main/frontend'
                    />
                </Col>
                
            </Row>
        </Container>
    </Container>
  )
}

export default Projects