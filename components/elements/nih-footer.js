import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import CustomLink from "./custom-link"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <div>
              social-media-links
            </div>
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
              <div>
                Contact
              </div>
              <div>
                FAQ
              </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
              <div>
                RADx Program Website
              </div>
              <div>
                HHS Vulnerability Disclosure
              </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}


export default NIHFooter
