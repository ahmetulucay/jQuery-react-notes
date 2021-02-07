import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import User from "./components/User";

import './App.css';

class App extends Component{

  state = {
    users: [

      { id:1,
        name:"Ahmet U",
        salary:"4000",
        department:"Bilisim"
      },
      { id:2,
        name:"Mehmet U",
        salary:"5000",
        department:"Bilisim Y"
      },
      {id:3,
        name:"Behcet U",
        salary:"6000",
        department:"Bilisim K"
      }    
    ]
  }
  render(){
   return (
    <div className="container">
      <Navbar title = "User App"/>
      <hr/>
      <User 
      name = "Ahmet U."
      salary = "5000"
      department = "Coding"
      />
      
      <User 
      name = "Can C."
      salary = "4000"
      department = "Commentator"
      />

    </div>
  ); 
  }
}

export default App;
