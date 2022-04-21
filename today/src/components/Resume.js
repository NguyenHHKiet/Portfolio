import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Page, pdfjs} from 'react-pdf'
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import {AiOutlineDownload} from 'react-icons/ai'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import pdf from '../Assets/_Fresher React Dev 1.pdf'
import './Resume.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className='resume-section' >
        <Row className='resume'>
            <Document file={pdf} className='d-flex justify-content-center'>
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
            </Document>
        </Row>

        <Row style={{ justifyContent:'center', position:'relative' }} >
            <Button variant='primary' href={pdf} target='_blank' style={{maxWidth:250}} >
                <AiOutlineDownload/> &nbsp;Download CV
            </Button>
        </Row>
    </Container>
  )
}

export default Resume