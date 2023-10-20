

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Home from './Pages/Home'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Fileupload from './Components/Fileupload'
import ProtectRoute from './Services/ProtectRoute';
import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';
import Demo from './Components/demo';
import Memo from './Components/Memo';
import Callback from './Components/Callback';
// import { useState } from 'react';
// import {UserData} from './UserData'






function App() {
//  const[userData,setUserData]=useState({
//   labels:UserData.map((data)=>data.year),
//   datasets:[
//      {
//     label:"Europe",
//     data: ['800','950','1200','2500'],
//     // backgroundColor: 'rgba(255,206,86,0.2)'
//     backgroundColor: 'rgba(54,162,235,0.2)',
//     borderColor:'rgba(54,162,235,0.2)'
//   },
//   {
//     label:"Europe",
//     data: ['750','930','1200','2700'],
//     // backgroundColor: 'rgba(255,206,86,0.2)'
//     backgroundColor: 'rgba(54,162,235,0.2)',
//     borderColor:'rgba(54,162,235,0.2)'
//   },
//   {
//     label: "Europe",
//     type:'line',
//     data: ['800','950','1200','2500'],
//     backgroundColor: 'red',
//     borderColor:'red'
//   } ,
//   {
//     label: "Africa",
//     type:'line',
//     data: ['750','930','1200','2700'],
//     backgroundColor: 'orange',
//     borderColor:'orange'
//   }
// ]
//  })

  return (
    <>
    <Router>
        
        <Routes>
          <Route element={<Registration/>} path="/"></Route>
          <Route element={<Login/>} path="/login"></Route>
          <Route element={<Dashboard/>} path="/datarecord"></Route>
          <Route element={<Profile/>} path="/profile"></Route>
          <Route element={<Memo/>} path='/memo'></Route>
          <Route element={<Callback/>} path='/callback'></Route>
          <Route element={<Fileupload/>} path="/data"></Route>
          <Route element={<BarChart/>} path='/chart'></Route>
          <Route element={<LineChart/>} path='/linechart'></Route>
          <Route element={<Demo/>} path='/demo'></Route>
          <Route element={<ProtectRoute/>} path='/home'>
            <Route path='/home' element={<Home/>}/>
          </Route>
         
          </Routes>
       
          
  
      
    </Router>
    
    </>
  );
}

export default App;