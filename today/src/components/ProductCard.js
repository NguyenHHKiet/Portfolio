import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { SiBiolink } from 'react-icons/si'
import './Projects.css'

function ProductCard(props) {
  return (
    <Card className='project-card-view'>
        <Card.Img variant='top' src='props.img' alt='card-img' />
        <Card.Body>
            <Card.Title >
                {props.title}
            </Card.Title>
            <Card.Text style={{textAlign:'justify'}}>
                {props.description}
            </Card.Text>
            <Button variant='primary' href='props.link' target='_blank'>
                <SiBiolink/> &nbsp; View Github
            </Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard