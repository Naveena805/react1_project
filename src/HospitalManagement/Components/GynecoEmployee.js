import { useState } from 'react';
import React  from 'react'
import Navbar1 from './Navbar1';
import Button from 'react-bootstrap/esm/Button';
import './Style2.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import {empdata1} from './Empdata';
import { v4 as uuidv4 } from 'uuid';
import Profile1 from './Profile1Gyno';

import { DepContext } from './Main';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
const GynecoEmployee = () => {
  const NewID= uuidv4()

  
  const { nlistdep1, setNlistdep1,nlistdep, setNlistdep } = useContext(DepContext);
  




    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const{nlist1 ,setNlist1}=useContext(DepContext)

    // const [nlist1,setNlist1] = useState(empdata1)
const depheadselect  = nlistdep1.map(item => item.deph)
const depheadselect1  = nlistdep.map(item => item.deph)
const depname1 = nlistdep1.map(item => item.name)
const depname2  = nlistdep.map(item => item.name)
const [uniqueValues, setUniqueValues] = useState([]);


console.log(depname1,"sdfghjk1")

    const update1 = (value) => {
      setNlist1((prev) => {
        const updatedData = [...prev]; // Create a copy of empdata1
        updatedData.splice(value, 1, input);
         // Replace the item at index i with the updated input
        setNlist1(updatedData)
        console.log(updatedData)
         return updatedData;
         


         
      });
    
    };
    const removeItem1 = (i) => {
      setNlist1((prev) => {
        const Narray1 = [...prev];
        Narray1.splice(i, 1);
        return Narray1;
      });
      setInput({
        id: '',
        empno:'',
        depname: '',
        dephead: '',
        empname: '',
        img: '',
        yearjoining: '',
        desi: '',
        
      });
    };
    
    
    
    
    
    
    
    



    const [input, setInput] = useState({
        id: '',
        empno:'',
        depname: '',
        dephead: '',
        empname: '',
        img: '',
        yearjoining: '',
        desi: ''
        
      });
   
      const{nlist,setNlist}=useContext(DepContext)
      
      const enter = (e) => {
        e.preventDefault();
    
        if (
          input.id === '' ||
          input.empno === ""||
          input.depname === '' ||
          input.dephead === '' ||
          input.empname === '' ||
          input.img === '' ||
          input.yearjoining === '' ||
          input.desi === ''
        ) {
          handleShowModal();
          return;
        }
    
        setNlist((prev) => [...prev, {...input,index1:NewID}]);
        setInput({
          id: '',
          empno :'',
          depname: '',
          dephead: '',
          empname: '',
          img: '',
          yearjoining: '',
          desi: '',
        });

      };
    
      const handleChange = (h) => {
        setInput({ ...input, [h.target.name]: h.target.value });
      };
    
      const update = (i) => {
        setNlist((prev) => [...prev, input]);
        console.log(nlist)
        removeItem();
      };
    
    
      const edit=(value)=>{
        setInput
        (value);
        
       }
    
    
      const removeItem = (i) => {
        setNlist((prev) => {
          const Narray = [...prev];
          Narray.splice(i, 1);
          return Narray;
        });
        setInput({
          id: '',
          empno:'',
          depname: '',
          dephead: '',
          empname: '',
          img: '',
          yearjoining: '',
          desi: '',
        });
      };
      const navigate = useNavigate();    
      const navigate1 = useNavigate(); 
     
      const profile = ( i) => {
        console.log(i.id,"= 1")
    
          console.log("index 0");
          navigate('/Profile1Gyno');
      
      };


    
  return (
    <div className=''>
      <div className='b'>
        <Navbar1 />
      </div>

      <br />
      <div className='table-responsive'>
        <table className='table' style={{ width: '100%' }}>  
         <thead className='container-fluid'>
            <tr className='container-fluid'>
              <th scope='col'>#</th>
              <th scope='col'>Employee Number</th>
              <th scope='col'>Department Name</th>
              <th scope='col'>Department head</th>
              <th scope='col'>Employee Name</th>
              <th scope='col'>Profile Image</th>
              <th scope='col'>Year Joined</th>
              <th scope='col'>Designation</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody className='container-fluid'>
            <tr className='container-fluid'>
              <td>
                <input
                  style={{ width: '30px', borderRadius: '10px' }}
                  type='text'
                  name='id'
                  value={input.id}
                  onChange={(h) => handleChange(h)}
                />
              </td>
              <td>
              
                <input
                  style={{ width: '100px', borderRadius: '10px' }}
                  type='number'
                  name='empno'
                  value={input.empno}
                
                  onChange={(h) => handleChange(h)}
                />
              </td>
              <td>
              
              <select
  style={{ width: '100px', borderRadius: '10px' }}
  type='text'
  name='depname'
  value={input.depname}
  onChange={(h) => handleChange(h)}
>
  <option value=''>Select Department</option>
  {nlistdep1.map((value, index) => (
    <option key={index} value={value.name}>
      {value.name}
    </option>
  ))}
  {nlistdep.map((value, index) => (
    <option key={index} value={value.name}>
      {value.name}
    </option>
  ))}
</select>
              </td>
              <td>
              <select
  style={{ width: '100px', borderRadius: '10px' }}
  type='text'
  name='dephead'
  value={input.dephead}
  onChange={(h) => handleChange(h)}
>
  <option value=''>Select Head</option>
  {nlistdep1.map((values, index2) => (
    <option key={index2} value={values.deph}>
      {values.deph}
    </option>
  ))}
  {nlistdep.map((value, index1) => (
    <option key={index1} value={value.deph}>
      {value.deph}
    </option>
  ))}
</select>

              </td>
              <td>
                <input
                  style={{ width: '100px', borderRadius: '10px' }}
                  type='text'
                  name='empname'
                  value={input.empname}
                  onChange={(h) => handleChange(h)}
                />
              </td>
              <td>
                <input
                  style={{ width: '200px', borderRadius: '10px' }}
                  type='url'
                  name='img'
                  value={input.img}
                  onChange={(h) => handleChange(h)}
                />
              </td>
              <td>
                <input
                  style={{ width: '100px', borderRadius: '10px' }}
                  type='number'
                  name='yearjoining'
                  value={input.yearjoining}
                  onChange={(h) => handleChange(h)}
                />
              </td>
              <td>
                <input
                  style={{ width: '200px', borderRadius: '10px' }}
                  type='text'
                  name='desi'
                  value={input.desi}
                  onChange={(h) => handleChange(h)}
                />
              </td>
              <td>
              <Button
                  type='button'
                  className='btn btn '
                  style={{
                    height: '30px',
                    width: '250px',
                    borderRadius: '10px',
                    backgroundColor: 'pink',
                    color: 'black',
                    fontSize: 'larger',
                    paddingTop: '0px',
                  }}
                  onClick={enter}

                   disabled={nlist1.some((item) => (item.id  === input.id) || (item.empno === input.empno))||nlist.some((item) => 
                   (item.id === input.id) ||(item.empno === input.empno)) || input.id === '' && input.empno}
                >
                  New
                </Button>
                
              </td>
            </tr>

            {nlist1.map((value,k,index) => (
              <tr className='container-fluid' key={k}>
                <th scope='row'>{value.id}</th>
                <th>{value.empno}</th>
                <td>{value.depname}</td>
                {nlistdep1.map((values, i) => {
      if (value.depname === values.name) {
        return <td key={i}>{values.deph}</td>;
      }
      return null;
    })}
             {/* <td>{value.dephead}</td> */}
                <td>{value.empname}</td>
                <td>
                  <img src={value.img} alt='' />
                </td>
                
                <td>{value.yearjoining}</td>
                <td>{value.desi}</td>
                <td>
                <Button type='button'
                    className='btn btn'

                    style={{ height: '30px', width: '50px', backgroundColor: 'black', 
                    borderRadius: '10px' ,paddingLeft:'1px'}} onClick={()=>edit(value)}>Edit</Button>
                    <Button
                    type='button'
                    className='btn btn'
                    style={{
                      height: '30px',
                      width: '100px',
                      backgroundColor: 'green',
                      borderRadius: '10px',
                      marginLeft: '10px',
                    }}
                    onClick={update1} 
                  >
                    Add
                  </Button>
                  
                 
                  <Button
                    type='button'
                    className='btn btn-danger'
                    style={{
                      height: '30px',
                      width: '75px',
                      borderRadius: '10px',
                      marginLeft: '10px',
                    }}
                    onClick={removeItem1} 
                  >
                    Delete
                  </Button><br/><br/>
      
                  <Link to={`/Profile1Gyno?dep=${value.depname}&empname=${value.empname}&desi=${value.desi}&year=${value.yearjoining}&img=${value.img}&empno=${value.empno}&dephead=${value.dephead}`}>
                  <Button type='button'
                    className='btn btn-dark'
                    style={{ height: '30px', width: '100px', borderRadius: '10px' }}
                    onClick={() => profile(value)}>Profile</Button></Link>
                </td>
              </tr>
            ))}

      

            {nlist.map((value, index1,id) => (
              <tr key={index1} className='container-fluid'>
                <th scope='row'>{value.id}</th>
                <th >{value.empno}</th>
                <td>{value.depname}</td>
                {/* <td >{value.dephead}</td> */}
                {nlistdep.map((values, i) => {
      if (value.depname === values.name) {
        return <td key={i}>{values.deph}</td>;
      }else{
        return <td key={i}>{value.deph}</td>;

      }
     
    })}
               
                <td>{value.empname}</td>
                <td>
                  <img src={value.img} alt='' />
                </td>
               
                <td>{value.yearjoining}</td>
                <td>{value.desi}</td>
                <td >
                <Button type='button'
                    className='btn btn'

                    style={{ height: '30px', width: '50px', backgroundColor: 'black', 
                    borderRadius: '10px' ,paddingLeft:'1px'}} onClick={()=>edit(value)}>Edit</Button>
                     <Button
                    type='button'
                    className='btn btn'
                    style={{
                      height: '30px',
                      width: '100px',
                      backgroundColor: 'green',
                      borderRadius: '10px',marginLeft: '10px'
                    }}
                    onClick={update} 
                    >
                  Add
                    
                  </Button>
                  
                  <Button
                    type='button'
                    className='btn btn-danger'
                    style={{
                      height: '30px',
                      width: '75px',
                      borderRadius: '10px',marginLeft:'10px'
                    }}
                    onClick={()=>removeItem()}>
                    Delete
                  </Button><br/><br/>
                 <Link to={`/Profile1Gyno?dep=${value.depname}&empname=${value.empname}&desi=${value.desi}&year=${value.yearjoining}&img=${value.img}&empno=${value.empno}&dephead=${value.dephead}`}>
                  
                  <Button type='button'
                    className='btn btn-dark'
                    style={{ height: '30px', width: '100px', borderRadius: '10px' }}
                    onClick={() => profile(value)}>Profile</Button></Link>
                </td>
              </tr>
            ))}

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              
            </tr>
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill in all fields.</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default GynecoEmployee




