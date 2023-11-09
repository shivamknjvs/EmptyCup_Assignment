import { Fragment, useState } from 'react'

import './App.css'
import LandingPage from './LandingPage'
import Navbar from './Componets/Navbar'
import Taskbar from './Componets/TaskBar'
import UserCard from './Componets/UserCard'


function App() {
  

  return (
    <div  className="app">
       <Navbar />
       <hr />
       <Taskbar/>
       {/* <hr /> */}
      {/* <LandingPage /> */}
      <UserCard style={{backgroundColor: "#fffcf2"}} cont="Epic Design" valp="57" valy="8"/>
      <UserCard style={{backgroundColor: "white"}} cont="Studio - D3" valp="43" valy="6"/>
      <UserCard style={{backgroundColor: "#fffcf2"}} cont="House of designs" valp="57" valy="8"/>
      <br />
    </div>
  )
}

export default App
