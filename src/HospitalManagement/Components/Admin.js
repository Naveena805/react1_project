
import React from 'react'
import './Style2.css'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useFormik} from 'formik'
import {signupSchema} from './Schema'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Passwordreset from './Passwordreset';
import { SharedContext } from './SharedContext';


const initialValues={
    name:"",
    password:""
    
}


const Admin = () => {
 
    const sharedData = useContext(SharedContext);
   
    const navigate2 = useNavigate(); 
   
   const {values,handleSubmit,handleBlur,handleChange,errors,touched}= useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,
    onSubmit:(values)=>{
        console.log(values)
    }
})

const loginform=(e)=>{
    e.preventDefault();
    console.log("First",sharedData)
  
    if(
    (values.password === sharedData.data || values.password === "Naveena8@")
 ){
        console.log(values.name)
      console.log("First",sharedData)
      
        navigate2('/Department')
    }
    else{
        document.write("error")
    }
}
const navigate3 = useNavigate();
const passres=(e)=>{
   //setcount(count)
   navigate3('/Passwordreset')
}
  return (
    <div className='bodymain container-fluid'>
    <div className='bodymain12 container-fluid'>
    <h1 className= 'adminstyle container-fluid' ><u>Admin Login</u></h1><br/>

  
    <Form onSubmit={handleSubmit} className='f container-fluid'>
   
   <Form.Group className="mb-3  " controlId="formGroupEmail">
       <Form.Label className='label'>Name</Form.Label>
       <Form.Control type="text" placeholder="Enter name"  name="name" value="Naveena" readOnly='readOnly' onChange={handleChange} onBlur={handleBlur} style={{width:'300px'}} />
  
     </Form.Group>

     <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}  style={{width:'300px'}} />
        { errors.password && touched.password ? <p>{errors.password}</p>: null}
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col>
         
          <Button type="submit"  style={{color:'white',backgroundColor:'black'}} onClick={loginform}>Login</Button>
          <Button type="submit"  style={{color:'black',backgroundColor:'transparent' ,borderColor:'transparent'}} onClick={passres}>     Password reset</Button>
      
          
        </Col>
      </Form.Group>
      
      </Form>
    </div>
    </div>
  )
}

export default Admin
