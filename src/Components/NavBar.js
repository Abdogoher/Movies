import React from 'react'
import { Row , Col} from 'react-bootstrap'
import logo from '../images/logo.png'

const NavBar = ({search}) => {

  const onSearch=(word) => {
  search(word)
}

  return (
    <div className="nav-style w-100 px-2">
      
        <Row className='pt-2'>
          <Col xs="4" md="2" lg="1">
            <a href='/'>
              <img className='logo' src={ logo } alt="logo" />
            </a>
          </Col>
          <Col xs="8" md="10" lg="11" className='d-flex align-items-center'>
            <div className='search w-100'>
              <i className="fa fa-search"></i>
              <input onChange={(e)=>onSearch(e.target.value)} type="text" className='form-control' placeholder='ابحث....'/>
            </div>
          </Col>
        </Row>
      
      {/* <Row className="align-items-center">
        <Col xs={12} md={2} className="text-center mb-2 mb-md-0">
          <img src={logo} alt="logo" className="img-fluid" />
        </Col>
        <Col xs={12} md={10}>
          <InputGroup>
            <InputGroup.Text>
              <i className="fa fa-search"></i>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="ابحث..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row> */}
    </div>
  );
}

export default NavBar
