import React from 'react'
import Admin from './Admin'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Department from './Department'
import Passwordreset from './Passwordreset'

import Employee from './Employee'

import GynecoEmployee from './GynecoEmployee'


import Profile1 from './Profile1Gyno';

import { createContext } from 'react'
import {empdata1,empdata2,empdata} from './Empdata';
import { useState } from 'react'

import Gynecohead from './Gynecohead'

import datastore from './Datastore'


import Navbar1 from './Navbar1'
import Depdetails from './Depdetails'
import Dephead from './Dephead'


export const DepContext =createContext();

const Main1 = () => {
  const [nlist1, setNlist1] = useState(empdata1);
  const [nlistdep1,setNlistdep1] =useState(datastore);
  const [nlistdep,setNlistdep] = useState([]);
  const [nlist,setNlist] = useState([]);

  return (
    <div>
    
   
   
    <BrowserRouter> 
    <Routes>

    
 

   
    <Route path='/Passwordreset' element={<Passwordreset/>} />
  
    </Routes>
   
    <DepContext.Provider value ={{nlistdep,setNlistdep,nlistdep1,setNlistdep1,nlist1,setNlist1,nlist,setNlist }}>
    <Routes>
    <Route path='/' element={<Admin/>} />
    <Route path='/Dephead' element={<Dephead/>} />
    <Route path='/Depdetails' element={<Depdetails/>} />
    <Route path='/Navbar1' element={<Navbar1/>} />
    <Route path='/Department' element={<Department/>} />
    <Route path='/Gynecohead' element={<Gynecohead/>}/>
    <Route path='/Employee' element={<Employee/>}/>
    <Route path='/GynecoEmployee' element={<GynecoEmployee/>}/>
    
      <Route path='/Profile1Gyno' element={<Profile1/>}/>
     </Routes>
   
   
    </DepContext.Provider>
   
 

   
        </BrowserRouter>

    </div>
  )
}

export default Main1
