


import React, { useState } from 'react';
  import Navbar1 from './Navbar1';
  import './Style2.css';
  import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
  import datastore from './Datastore';
  import Button from 'react-bootstrap/esm/Button';
  import { useNavigate } from 'react-router-dom';
  import Modal from 'react-bootstrap/Modal';
  import Gynecohead from './Gynecohead';
  import { DepContext } from './Main';
  import { useContext } from 'react';
  import { Link } from 'react-router-dom';
  import { v4 as uuidv4 } from 'uuid';
  import Depdetails from './Depdetails';
  const Dephead = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const { nlistdep1, setNlistdep1 } = useContext(DepContext);
    const [editIndex, setEditIndex] = useState(null);
    console.log(nlistdep1,"dfghjk")
    const NewID= uuidv4()
    const update1 = (value) => {
      setNlistdep1((prev) => {
        const updatedData = [...prev]; // Create a copy of nlistdep1
        updatedData.splice(value, 1, input); // Replace the item at index i with the updated input
        console.log(updatedData);
        return updatedData;
        
      });
     

      setInput({
        id: '',
        deph: '',
        empno:'',
       
       name: '',
        img: '',
      });
      // removeItem1();
    };

    const removeItem1 = (i) => {
      setNlistdep1((prev) => {
        const Narray1 = [...prev];
        Narray1.splice(i, 1);
        return Narray1;
      });
      setInput({
        id: '',
    deph: '',
    empno:'',
   
   name: '',
    img: '',
      });
  
    };

    const [input, setInput] = useState({
      id: '',
      deph: '',
      empno:'',
  
  name: '',
      img: '',
    });

    const { nlistdep, setNlistdep } = useContext(DepContext);
  {console.log(nlistdep,"nlistdep",nlistdep1,"nlistdep1")}

    const enter = (e) => {
      e.preventDefault();
    
      if (
        input.id === '' ||
        input.deph === '' ||
        input.empno === '' ||
      
        input.name === '' ||
        input.img === ''
      ) {
        handleShowModal();
        return;
      }

      setNlistdep((prev) => [...prev,{...input,index1:NewID}]);
      // setNlistdep((prev) => [...prev,input]);
      setInput({
        id: '',
        deph: '',
        empno:'',
       
       name: '',
        img: '',
      });
    };

    const handleChange = (h) => {
      setInput({ ...input, [h.target.name]: h.target.value });
    };

    const update = (i) => {
      setNlistdep((prev) => [...prev, input]);
     
      removeItem();
      
      
    };

    const edit = (value, index) => {
      setInput(value);
      console.log(index);
    };

    const removeItem = (i) => {
      setNlistdep((prev) => {
        const Narray = [...prev];
        Narray.splice(i, 1);
        return Narray;
      });
      setInput({
        id: '',
        deph: '',
        empno:'',
       
       name: '',
        img: '',
      });
    };

    const dephead = () => {
      navigate('/Gynecohead');
      console.log(nlistdep)
    };
  const index ="";
  const index1=NewID;
    return (
      <div className='bodymain container-fluid'>
        <div className='b container-fluid'>
          <Navbar1 />
          
        </div>
        <br />
        <h1 style={{ color: 'white' , textAlign: 'center'}}>
          <u>Department Heads</u>         </h1><br/>
        <div className='table-responsive'>
        <table className='table' style={{ width: '100%' }}>  
         <thead className='container-fluid'>
              <tr className='container-fluid'>
              <th scope='col'>#</th>
              <th scope='col'>Head Name</th>
              <th scope='col'>Employee Number</th>
              <th scope='col'>Department</th>
              <th scope='col'>Profile Image</th>
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
                    // value={input.index1}
                    value={input.id}
                    onChange={(h) => handleChange(h)}
                  />
                </td>
                <td>
                  <input
                    style={{ width: '100px', borderRadius: '10px' }}
                    type='text'
                    name='deph'
                    value={input.deph}
                    onChange={(h) => handleChange(h)}
                  />
                </td>
                
                <td>
                  <input
                    style={{ width: '50px', borderRadius: '10px' }}
                    type='number'
                    name='empno'
                    value={input.empno}
                    onChange={(h) => handleChange(h)}
                  />
                </td>
                <td>
                
                  <input
                    style={{ width: '50px', borderRadius: '10px' }}
                    type='text'
                    name='name'
                    value={input.name}
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

                    disabled={nlistdep1.some((item) => (item.id === input.id) || (item.empno === input.empno))||nlistdep.some((item) => (item.id === input.id) || (item.empno === input.empno)) || input.id === ''}
                  >
                    New
                  </Button>
                </td>
              </tr>

              {nlistdep1.map((value, index1) => (
                
                <tr className='container-fluid'>
                  <th scope='row'>{value.id}</th>
                  <td>{value.deph}</td>
                  
                  <td>{value.empno}</td>
                  <td>{value.name}</td>
                  
                  <td>
                    <img src={value.img} alt='' />
                  </td>
                  <td>
                    <Button
                      type='button'
                      className='btn btn'
                      style={{
                        height: '30px',
                        width: '50px',
                        backgroundColor: 'black',
                        borderRadius: '10px',
                        paddingLeft: '1px',
                      }}
                      onClick={() => edit(value, index)}
                    >
                      Edit
                    </Button>
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
                      onClick={() => update1(index1)}
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
                      onClick={() => removeItem1(index1)}
                    >
                      Delete
                    </Button>
                    <br />
                    <br />
                    {/* index={index}; */}
                    <Link to={`/Gynecohead?depname=${value.name}&dephead=${value.deph}`}>                         
                    <Button
                      type='button'
                      className='btn btn-dark'
                      style={{
                        height: '30px',
                        width: '130px',
                        borderRadius: '10px',
                      }}
                      onClick={dephead}
                    >
                    Profile
                    </Button>
                    </Link>
                  </td>
                </tr>
              ))}

              
              {nlistdep.map((value, index,id) => (
                
                <tr className='container-fluid' key ={id}>
                  <th scope='row'>{value.id}</th>
                  <td>{value.deph}</td>
                  
                  <td>{value.empno}</td>
                  <td>{value.name}</td>
                  
                  <td>
                    <img src={value.img} alt='' />
                  </td>
                  <td>
                    <Button
                      type='button'
                      className='btn btn'
                      style={{
                        height: '30px',
                        width: '50px',
                        backgroundColor: 'black',
                        borderRadius: '10px',
                        paddingLeft: '1px',
                      }}
                      onClick={() => edit(value)}
                    >
                    Edit
                    </Button>
                    <Button
                      type='button'
                      className='btn btn'
                      style={{
                        height: '30px',
                        width: '100px',
                        backgroundColor: 'green',
                        borderRadius: '10px',marginLeft: '10px'
                      }}
                      onClick={() => update(index)}
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
                      onClick={() => removeItem(id)}
                    >
                      Delete
                    </Button>
                    <br/><br/>
                    <Link to={`/Gynecohead?depname=${value.name}&dephead=${value.deph}`}>                         
                     <Button
                      type='button'
                      className='btn btn-dark'
                      style={{
                        height: '30px',
                        width: '130px',
                        borderRadius: '10px',
                      }}
                      onClick={dephead}
                    >
                      Profile
                    </Button></Link>
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
    );
  };

  export default Dephead;
