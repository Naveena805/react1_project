// import React, { useContext } from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import medcity from '../../images/medcity.jpg'
// import { Link ,NavLink, useNavigate} from 'react-router-dom';

// import { DepContext } from './Main';

// import './Style2.css'
// const Navbar1 = () => {
//   const navigate=useNavigate();
//    const { nlistdep } = useContext(DepContext);
//    const handleLogoutClick = (event) => {
//     const confirmLogout = window.confirm('Do you want to exit?');
//     if (!confirmLogout) {
//       event.preventDefault();
//     } else {
//       navigate('/');
//     }
//   };
//   return (
    
//         <Navbar className="navbar">
//               <Container >
//               <NavLink to=" " className='nav1'> {<img src={medcity}  style={{height:'55px',width:'120px',marginTop:'-10px',fontSize:'larger' }} alt="" className="rounded-circle"/>}</NavLink>            
//                 <NavLink to="/" className="nav" style={{color:'white',fontSize:'larger'}}>AdminLogin  </NavLink>
//                 <NavLink to="/Department"   style={{color:'white',paddingLeft:'10px',fontSize:'larger'}} className='nav'>Departments  </NavLink>
                
//                 <NavLink to="/Dephead"   style={{color:'white',paddingLeft:'10px',fontSize:'larger'}} className='nav'>
//                 <Link to={`/Dephead?nlistdep=${encodeURIComponent(JSON.stringify(nlistdep))}`} style={{color:'white',textDecoration:'none'}}>


//                 Department Heads </Link>  </NavLink>
//                 <NavLink to="/GynecoEmployee"  style={{color:'white',fontSize:'larger'}} className='nav'>
//                 <Link to={`/GynecoEmployee?nlistdep=${encodeURIComponent(JSON.stringify(nlistdep))}`} style={{color:'white',textDecoration:'none'}}>
  
// </Link>Employees
// </NavLink> 
// {/* <NavLink to="/"   style={{color:'white',paddingLeft:'10px',fontSize:'larger'}} className='nav'>Logout  </NavLink>
//                  */}
              
//                  <NavLink
//           to="/"
//           style={{ color: 'white', paddingLeft: '10px', fontSize: 'larger' }}
//           className="nav"
//           onClick={handleLogoutClick}
//         >
//           Logout
//         </NavLink>        
               
//               </Container>
//               </Navbar>


      
   
//   )
// }

// export default Navbar1



import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import medcity from '../../images/medcity.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { DepContext } from './Main';

import './Style2.css';

const Navbar1 = () => {
  const navigate = useNavigate();
  const { nlistdep } = useContext(DepContext);

  const handleLogoutClick = (event) => {
    const confirmLogout = window.confirm('Do you want to exit?');
    if (!confirmLogout) {
      event.preventDefault();
    } else {
      navigate('/');
    }
  };

  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand>
          <NavLink to=" " className="nav1">
            <img src={medcity} style={{ height: '55px', width: '120px', marginTop: '-10px', fontSize: 'larger' }} alt="" className="rounded-circle" />
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
<Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav" style={{ color: 'white', fontSize: 'larger' }}>
              Admin Login
            </NavLink>

            <NavLink to="/Department" style={{ color: 'white', paddingLeft: '10px', fontSize: 'larger' }} className="nav">
              Departments
            </NavLink>

            <NavLink to="/Dephead" style={{ color: 'white', paddingLeft: '10px', fontSize: 'larger' }} className="nav">
              <Link to={`/Dephead?nlistdep=${encodeURIComponent(JSON.stringify(nlistdep))}`} style={{ color: 'white', textDecoration: 'none' }}>
                Department Heads
              </Link>
            </NavLink>

            <NavLink to="/GynecoEmployee" style={{ color: 'white', paddingLeft: '10px', fontSize: 'larger' }} className="nav">
              <Link to={`/GynecoEmployee?nlistdep=${encodeURIComponent(JSON.stringify(nlistdep))}`} style={{ color: 'white', textDecoration: 'none' }}>
                Employees
              </Link>
            </NavLink>

            <NavLink
              to="/"
              style={{ color: 'white', paddingLeft: '10px', fontSize: 'larger' }}
              className="nav"
              onClick={handleLogoutClick}
            >
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
