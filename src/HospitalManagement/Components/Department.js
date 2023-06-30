




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

const Department = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const { nlistdep1, setNlistdep1 } = useContext(DepContext);
  const [editIndex, setEditIndex] = useState(null);
  const NewID = uuidv4();
  const update1 = (value) => {
    setNlistdep1((prev) => {
      const updatedData = [...prev];
      updatedData.splice(value, 1, input);
      console.log(updatedData);
      return updatedData;
    });
  };

  const removeItem1 = (i) => {
    setNlistdep1((prev) => {
      const Narray1 = [...prev];
      Narray1.splice(i, 1);
      return Narray1;
    });
    setInput({
      id: '',
      name: '',
      pimage: '',
      year: '',
      des: '',
      deph: '',
    });
  };

  const [input, setInput] = useState({
    id: '',
    name: '',
    pimage: '',
    year: '',
    des: '',
    deph: '',
  });

  const { nlistdep, setNlistdep } = useContext(DepContext);

  const enter = (e) => {
    e.preventDefault();

    if (
      input.id === '' ||
      input.name === '' ||
      input.pimage === '' ||
      input.year === '' ||
      input.des === '' ||
      input.deph === ''
    ) {
      handleShowModal();
      return;
    }

    setNlistdep((prev) => [...prev, { ...input, index1: NewID }]);
    setInput({
      id: '',
      name: '',
      pimage: '',
      year: '',
      des: '',
      deph: '',
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
      name: '',
      pimage: '',
      year: '',
      des: '',
      deph: '',
    });
  };

  const dephead = () => {
    navigate('/Depdetails');
    console.log(nlistdep);
  };

  const index = '';
  const index1 = NewID;

  return (
    <div className='bodymain container-fluid'>
      <div className='b container-fluid'>
        <Navbar1 />
      </div>
      <br />
      <h1 className='h11 container-fluid'>
        <u>Departments</u>
      </h1>
      <br />
      <div className='container-fluid'>
        <div className='table-responsive'>
          <table className='table1 container-fluid'>
            <thead className='container-fluid'>
              <tr className='container-fluid'>
                <th scope='col'>#</th>
                <th scope='col'>Department Name</th>
                <th scope='col'>Profile Image</th>
                <th scope='col'>Year Founded</th>
                <th scope='col'>Description</th>
                <th scope='col'>Department Head</th>
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
                    name='pimage'
                    value={input.pimage}
                    onChange={(h) => handleChange(h)}
                  />
                </td>
                <td>
                  <input
                    style={{ width: '50px', borderRadius: '10px' }}
                    type='number'
                    name='year'
                    value={input.year}
                    onChange={(h) => handleChange(h)}
                  />
                </td>
                <td>
                  <input
                    style={{ width: '400px', borderRadius: '10px' }}
                    type='text'
                    name='des'
                    value={input.des}
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
                  <Button
                    type='button'
                    className='btn btn'
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
                    disabled={
                      nlistdep1.some((item) => item.id === input.id) ||
                      nlistdep.some((item) => item.id === input.id) ||
                      input.id === ''
                    }
                  >
                    New
                  </Button>
                </td>
              </tr>

              {nlistdep1.map((value, index1) => (
                <tr className='container-fluid' key={index1}>
                  <th scope='row'>{value.id}</th>
                  <td>{value.name}</td>
                  <td>
                    <img src={value.pimage} alt='' />
                  </td>
                  <td>{value.year}</td>
                  <td>{value.des}</td>
                  <td>{value.deph}</td>
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
                      onClick={() => edit(value, index1)}
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
                    <Link
                      to={`/Depdetails?index=${index1}&namedep=${value.name}`}
                    >
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

              {nlistdep.map((value, id) => (
                <tr className='container-fluid' key={id}>
                  <th scope='row'>{value.id}</th>
                  <td>{value.name}</td>
                  <td>
                    <img src={value.pimage} alt='' />
                  </td>
                  <td>{value.year}</td>
                  <td>{value.des}</td>
                  <td>{value.deph}</td>
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
                        borderRadius: '10px',
                        marginLeft: '10px',
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
                        borderRadius: '10px',
                        marginLeft: '10px',
                      }}
                      onClick={() => removeItem(id)}
                    >
                      Delete
                    </Button>
                    <br />
                    <br />
                    <Link
                      to={`/Depdetails?name=${value.name}&image=${value.pimage}&year=${value.year}&des=${value.des}`}
                    >
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

              <tr>
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
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill in all the fields.</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Department;
