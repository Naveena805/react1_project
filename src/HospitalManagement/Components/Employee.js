
import Navbar1 from './Navbar1';
import './Style2.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DepContext } from './Main';
import { useContext } from 'react';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const Employee = () => {
  const location = useLocation();
  
  const { nlistdep1, setNlistdep1,nlistdep, setNlistdep } = useContext(DepContext);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const nlistdepParam = searchParams.get('nlistdep');

    if (nlistdepParam) {
      const decodedNlistdep = JSON.parse(decodeURIComponent(nlistdepParam));
      setNlistdep(decodedNlistdep);
    }
  }, [location.search]);
 
  const ClickableCard = ({ id, title, description, image, link }) => {
   
    return (
      <Link to={link} className="card-link">
        <Card className="custom-card" style={{backgroundColor:'pink',height:'300px'}}>
          <Card.Img variant="top" src={image} style={{height:'200px'}} />
          <Card.Body>
            <Card.Title style={{textAlign:'center',color:'red'}}>{title}</Card.Title>
            <Card.Text style={{textAlign:'center'}}>Head : {description}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  };


 

  return (
    <div className="bodymain">
      <div className="b container-fluid">
        <Navbar1 />
      </div>
   
          
      <div className="card-container">
      
      {nlistdep1.map((value,index) => (
     

       
   
        
       
        <ClickableCard
          id={index}
          title={value.name}
          description={value.deph}
          image={value.pimage}
          link={`/GynecoEmployee?index=${value.name}&head=${value.deph}`}
        />
       
        ))} <br/>
        {nlistdep.map((value,index1) => (
          
   
   
         <ClickableCard
          
          id={index1}
          title={value.name}
          description={value.deph}
          image={value.pimage}
         
          link={`/GynecoEmployee?index1=${value.name}&head=${value.deph}`}
          
        />
       
        ))}
        
     
      </div>
    
    </div>
  );
};

export default Employee;
