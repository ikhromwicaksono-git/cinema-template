import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../Redux/Action'

const Example = (props) => {
  let { role, Logout } = props;
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
  const onBtnLogout = () =>{
    Logout()
    localStorage.removeItem('username')
  }

  if(role === 'user'){
    return(
      <div>
      <Navbar color="faded" light className='mb-5' style={{backgroundColor: '#DC3545'}}>
        <Link to='/' style={{fontWeight: 500, textDecoration: 'none', color:'white'}}>
          Cinema
        </Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <Link to='/' style={{fontWeight: 400, textDecoration: 'none', color:'white'}} onClick={onBtnLogout}>
                Logout
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  }else if(role === 'admin'){
    return(
      <div>
      <Navbar color="faded" light className='mb-5' style={{backgroundColor: 'black'}}>
        <Link to='/' style={{fontWeight: 500, textDecoration: 'none', color:'white'}}>
          Cinema
        </Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <Link to='/admin' style={{fontWeight: 400, textDecoration: 'none', color:'white'}}>
                Manage Movies
            </Link>
            <Link to='/' style={{fontWeight: 400, textDecoration: 'none', color:'white'}} onClick={onBtnLogout}>
                Logout
            </Link>
            <Link to='/admin' style={{fontWeight: 400, textDecoration: 'none', color:'white'}}>
                Admin
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  }else{
    return (
      <div>
        <Navbar color="faded" light className='mb-5' style={{backgroundColor: 'gray'}}>
          <Link to='/' style={{fontWeight: 500, textDecoration: 'none', color:'white'}}>
            Cinema
          </Link>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <Link to='/login' style={{fontWeight: 400, textDecoration: 'none', color:'white'}}>
                  Login
              </Link>
              <Link to='/register' style={{fontWeight: 400, textDecoration: 'none', color:'white'}}>
                  Register
              </Link>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStatetoProps = ({auth}) => {
  return{
    role: auth.role
  }
}

export default connect(mapStatetoProps,{ Logout })(Example);