import React from 'react'

import { useContext } from 'react';
// import {GynecoEmployeeContext} from './Main';
import './Style1.css';
import { Link, useNavigate } from 'react-router-dom';
import Department from './Department';
import { DepContext } from './Main';
import Gynecohead from './Gynecohead';
import Navbar1 from './Navbar1';
import { useLocation } from 'react-router-dom';
const Profile1 = () => {
   const navigate =useNavigate();
   const navigate1 = useNavigate();
  const { nlist1,setNlist1,nlist,setNlist, nlistdep,nlistdep1 } = 
  useContext(DepContext);
 
  {console.log(nlist1[0].depname,"nlist1")}
  {console.log(nlist,"nlist")}
  {console.log(nlistdep1[0].name,"nlistdep")}

 
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const dep = params.get('dep');
const empname = params.get('empname')
const desi = params.get('desi')
const year = params.get('year')
const img =params.get('img')
const empno = params.get('empno')
const dephead = params.get('dephead')

const depdetail =()=>{
navigate('/Depdetails')
}

const depheaddetail =()=>{
    navigate1('/Gynecohead')
    }

console.log(nlist)

const DeptDetail=(e)=>{
    e.preventDefault()
 if( nlist1[0].depname == nlistdep1[0].name){

 }
}
  return (
  <div>
<div className='b container-fluid'>
          <Navbar1 />
          
        </div>

<div className="container rounded bg-white mt-5 mb-5" >
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle "style={{width:"150px",height:"250px"}}  src={img}/><br/><span className="font-weight-bold" style={{fontSize:'35px'}}>{empname}</span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value={empname}/><label className="labels">Employee Number</label><input type="text" className="form-control" value={empno} placeholder="surname"/></div>
     
{nlistdep1.map((values, i) => {
      if (dep === values.name) {
        return <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="E" placeholder="surname"/><label className="labels">Department Head</label><input type="text" className="form-control" value={values.deph} placeholder="surname"/></div>
;
      }
      return null;
    })}
    {nlistdep.map((values, i) => {
      if (dep === values.name) {
        
        return <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="E" placeholder="surname"/><label className="labels">Department Head</label><input type="text" className="form-control" value={values.deph} placeholder="surname"/></div>
;
      }
      return null;
    })}      






                    <div className="col-md-6"><label className="labels">Department</label><input type="text" className="form-control" placeholder="first name" value={dep}/></div>
                    
                    <div className="col-md-6"><label className="labels">Year of Joining</label><input type="text" className="form-control" placeholder="first name" value={year}/></div>
                    <div className="col-md-6"><label className="labels">Designation</label><input type="text" className="form-control" placeholder="first name" value={desi}/></div>
                    
                
                
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value="+91 8765432198"/></div>
                    <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value="20/123 kalpakkam Coimbatore"/></div>

                    <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value="Ankita@gmail.com"/></div>
                    <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" value="Nursing"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value="India"/></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="TamilNadu" placeholder="state"/></div>
                </div>
                <div className="mt-3 text-center">
                {nlistdep1.map((values, i) => {
      if (dep === values.name) {
        return  <Link to={`/Depdetails?depname1=${values.name}`}>
                <button className="btn btn-primary profile-button" type="button" onClick={depdetail}>Department detail</button>
                </Link>
                
      }
      return null;
    })}
    {nlistdep.map((values, i) => {
      if (dep === values.name) {
        return  <Link to={`/Depdetails?depname1=${values.name}`}>
                <button className="btn btn-primary profile-button" type="button" onClick={depdetail}>Department detail</button>
                </Link>
                
      }
      return null;
    })}

                </div>
                
                <div className="mt-5 text-center">
                {nlistdep1.map((values, i) => {
      if (dep === values.name) {
        return  <Link to={`/Gynecohead?depname1=${values.name}&dephead1=${values.deph}`}>
                <button className="btn btn-primary profile-button" type="button" onClick={depheaddetail}>Department Head detail</button>
                </Link>
                
      }
      return null;
    })}

    {nlistdep.map((values, i) => {
      if (dep === values.name) {
        return  <Link to={`/Gynecohead?depname1=${values.name}&dephead1=${values.deph}`}>
                <button className="btn btn-primary profile-button" type="button" onClick={depheaddetail}>Department Head detail</button>
                </Link>
                
      }
      return null;
    })}     
                </div>
            </div>
        </div>
   
        
    </div>
</div>




</div>

 
  )
}

export default Profile1
