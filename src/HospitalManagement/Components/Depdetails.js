

import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Navbar1';
import './Style2.css';
import { useLocation } from 'react-router-dom';
import { DepContext } from './Main';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Depdetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const index = params.get('index');
  const name = params.get('name');
  const image = params.get('image');
  const year = params.get('year');
  const des = params.get('des');
  const namedep = params.get('namedep');
  const depname1 = params.get('depname1');
  const { nlistdep, setNlistdep, nlistdep1, setNlistdep1, nlist1, nlist } = useContext(DepContext);

  const navigate = useNavigate();

  const selectedValue3 = nlistdep1.find(item => item.name === depname1);
  const selectedValue4 = nlistdep.find(item => item.name === depname1);
  const selectedValue5 = nlist1.filter(item => item.depname === depname1);
  const selectedValue6 = nlist.filter(item => item.depname === depname1);
  const selectedValue7 = nlist1.filter(item => item.depname === namedep);
  const selectedValue8 = nlist.filter(item => item.depname === name);

  const dep = () => {
    navigate('/Department');
  };

  const selectedValue = nlistdep1[index];
  const selectedValue1 = nlistdep[index];

  return (
    <div className='bodymain'>
      <div className='b container-fluid'>
        <Navbar1 />
      </div>
      <br />
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        <u>Department Details</u>
      </h1>
      <br />

      <div className='container-fluid'>
        <div
          className='card'
          style={{
            borderRadius: '25px',
            maxWidth: '30rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '30px',
            backgroundColor: 'rgb(140,188,210)',
           
          }}
        >
          <img
            src={selectedValue?.pimage || image || selectedValue3?.pimage || selectedValue4?.pimage}
            className='card-img-top'
            alt='...'
            style={{ width: '100%', height: 'auto', borderRadius: '25px' }}
          />
          <div className='card-body'>
            <h5 className='card-title' style={{ fontSize: '50px', color: 'purple', textAlign: 'center' }}>
              {selectedValue?.name || name || selectedValue3?.name || selectedValue4?.name}
            </h5>
            <h5 className='card-title' style={{ fontSize: '25px', color: 'black', textAlign: 'center' }}>
              Year founded: {selectedValue?.year || year || selectedValue3?.year || selectedValue4?.year}
            </h5>
            <p className='card-text' style={{ textAlign: 'center' }}>
              {selectedValue?.des || des || selectedValue3?.des || selectedValue4?.des}
            </p>
            <a href='#' className='btn btn-dark' style={{ marginLeft: '150px', color: 'white' }} onClick={dep}>
              Department
            </a>
          </div>
        </div>

        <div className='table-responsive'>
          <table className='table' style={{ width: '100%' }}>
            <thead>
              <tr>
                <th scope='col'>Employee Number</th>
                <th scope='col'>Department Name</th>
                <th scope='col'>Department head</th>
                <th scope='col'>Employee Name</th>
                <th scope='col'>Profile Image</th>
                <th scope='col'>Year Joined</th>
                <th scope='col'>Designation</th>
              </tr>
            </thead>
            <tbody>
              {selectedValue7.map((item, index) => (
                <tr key={index}>
                  <th>{item.empno}</th>
                  <td>{item.depname}</td>
                  {nlistdep1.map((item1, innerIndex) => {
                    if (namedep === item1.name) {
                      return <td key={innerIndex}>{item1.deph}</td>;
                    }
                    return null;
                  })}
                  <td>{item.empname}</td>
                  <td>
                    <img src={item.img} alt='' />
                  </td>
                  <td>{item.yearjoining}</td>
                  <td>{item.desi}</td>
                </tr>
              ))}

              {selectedValue8.map((item, index) => (
                <tr key={index}>
                  <th>{item.empno}</th>
                  <td>{item.depname}</td>
                  {nlistdep.map((item1, innerIndex1) => {
                    if (name === item1.name) {
                      return <td key={innerIndex1}>{item1.deph}</td>;
                    }
                    return null;
                  })}
                  <td>{item.empname}</td>
                  <td>
                    <img src={item.img} alt='' />
                  </td>
                  <td>{item.yearjoining}</td>
                  <td>{item.desi}</td>
                </tr>
              ))}

              {selectedValue5.map((item, index) => (
                <tr key={index}>
                  <th>{item.empno}</th>
                  <td>{item.depname}</td>
                  {nlistdep1.map((item1, innerIndex) => {
                    if (depname1 === item1.name) {
                      return <td key={innerIndex}>{item1.deph}</td>;
                    }
                    return null;
                  })}
                  <td>{item.empname}</td>
                  <td>
                    <img src={item.img} alt='' />
                  </td>
                  <td>{item.yearjoining}</td>
                  <td>{item.desi}</td>
                </tr>
              ))}

              {selectedValue6.map((item, index) => (
                <tr key={index}>
                  <th>{item.empno}</th>
                  <td>{item.depname}</td>
                  {nlistdep.map((item1, innerIndex) => {
                    if (depname1 === item1.name) {
                      return <td key={innerIndex}>{item1.deph}</td>;
                    }
                    return null;
                  })}
                  <td>{item.empname}</td>
                  <td>
                    <img src={item.img} alt='' />
                  </td>
                  <td>{item.yearjoining}</td>
                  <td>{item.desi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Depdetails;
