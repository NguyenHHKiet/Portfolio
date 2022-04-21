import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import {Document, Page, pdfjs} from 'react-pdf'
import {AiOutlineDownload} from 'react-icons/ai'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import pdf from '../Assets/'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink ="https://raw.githubusercontent.com/NguyenHHKiet/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function Resume() {
const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className='resume-section' >
        <Row className='resume'>
            <Document className=''>
                <Page/>
            </Document>
        </Row>

        <Row style={{ justifyContent:'center', position:'relative' }} >
            <Button variant='primary' to={pdf} target='_blank' style={{maxWidth:250}} >
                <AiOutlineDownload/> &nbsp;Download CV
            </Button>
        </Row>
    </Container>
  )
}

export default Resume