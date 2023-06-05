import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import CustomLink from "./custom-link"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const NIHFooter = () => {
  return (
    <footer style={{
      backgroundColor: '#2e2925', 
      width: '100%',
      color: '#fff',
      lineHeight: '25px',
      fontSize: '15px',
      fontFamily: "Roboto Condensed"
    }}>
      <Container fluid='lg'>
        <Row style={{padding: '1.5rem 2.5rem'}}>
          <Col xs={12} sm={12} md={6} lg={3}>
            <div>
              Connect with NIH
            </div>
            <Row style={{paddingTop: '0.2rem'}}>
              <Col xs={1} sm={1} lg={1} style={{marginRight: '0.4rem'}}>
                <CustomLink link={{url: 'https://twitter.com/NIH', id:'1'}}>
                  <FontAwesomeIcon icon={faTwitterSquare} size='2xl'/>
                </CustomLink>
              </Col>
              <Col xs={1} sm={1} lg={1}>
                <CustomLink link={{url: 'https://www.facebook.com/nih.gov', id:'1'}}>
                  <FontAwesomeIcon icon={faFacebookSquare} size='2xl'/>
                </CustomLink>
              </Col>
              <Col xs={1} sm={1} lg={1} style={{marginLeft: '0.4rem'}}>
                <CustomLink link={{url: 'https://www.youtube.com/user/NIHOD', id:'1'}}>
                  <FontAwesomeIcon icon={faYoutubeSquare} size='2xl'/>
                </CustomLink>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <div>
              National Institutes of Health
            </div>
            <div>
              9000 Rockville Pike
            </div>
            <div>
              Bethesda, Maryland 20892
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <CustomLink link={{url: '/contact', id:'1'}}>
              <div>
                Contact
              </div>
            </CustomLink>
            <CustomLink link={{url: '/faqs', id:'1'}}>
              <div>
                FAQ
              </div>
            </CustomLink>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <CustomLink link={{url: 'https://www.nih.gov/research-training/medical-research-initiatives/radx', id:'1'}}>
              <div>
                RADx Program Website
              </div>
            </CustomLink>
            <CustomLink link={{url: 'https://www.hhs.gov/vulnerability-disclosure-policy/index.html', id:'1'}}>
              <div>
                HHS Vulnerability Disclosure
              </div>
            </CustomLink>  
          </Col>
        </Row>
      </Container>
    </footer>
  )
}


export default NIHFooter
