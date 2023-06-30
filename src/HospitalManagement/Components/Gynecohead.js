import React from 'react'

import './Style1.css';
import { useNavigate } from 'react-router-dom';
import Department from './Department';
import { DepContext } from './Main';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar1 from './Navbar1';
const Gynecohead = () => {
   const navigate =useNavigate();
   const navigate1 = useNavigate();
  
   const {nlistdep,setNlistdep,nlistdep1,setNlistdep1 } = 
   useContext(DepContext);
 
const location = useLocation();
const params = new URLSearchParams(location.search);
const depname = params.get('depname');
const dephead =params.get('dephead');
const depname1 = params.get('depname1');
const dephead1 = params.get('dephead1');


console.log(depname,dephead,"fghjk")




const depdetail =()=>{
navigate('/Department')
}


  return (
  <div>
<div className='b container-fluid'>
          <Navbar1 />
          
        </div>

<div className="container rounded bg-white mt-5 mb-5" >
    <div className="row">
        <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle "style={{width:"150px",height:"250px"}}  src="cn.jpg"/><br/><span className="font-weight-bold" style={{fontSize:'35px'}}>{dephead || dephead1}</span></div>        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value={dephead  || dephead1 }/></div>
                    
                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="E" placeholder="surname"/></div>
                    <div className="col-md-6"><label className="labels">Department</label><input type="text" className="form-control" placeholder="first name" value={depname ||depname1  }/></div>
                    
                    <div className="col-md-6"><label className="labels">Year of Joining</label><input type="text" className="form-control" placeholder="first name" value="2019"/></div>
                    <div className="col-md-6"><label className="labels">Designation</label><input type="text" className="form-control" placeholder="first name" value="Doctor"/></div>
                    
                
                
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value="+91 8765432198"/></div>
                    <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value="cherpulassery ,palakkad"/></div>

                    <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value="Anand@gmail.com"/></div>
                    <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" value="MD"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value="India"/></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="Kerala" placeholder="state"/></div>
                </div>
                <div className="mt-3 text-center"><button className="btn btn-primary profile-button" type="button" onClick={depdetail}>Department detail</button></div>
            
                
            </div>
        </div>
   
        
    </div>
</div>

</div>

 
  )
}

export default Gynecohead
