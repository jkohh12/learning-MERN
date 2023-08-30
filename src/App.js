
import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


const App = () => {
  //buttons
  
  return (
    <div>
      <Header firstName = {"Jane"} lastName = {"Doe"} Age = {45} HairColor = {"Black"} />
      <Header firstName = {"John"} lastName = {"Smith"} Age = {88} HairColor = {"Brown"} />
    </div>

  );

  //scary terry
  // const[name, setName] = useState("");

  // const onClick = () => {
  //   setName("scary");

  // }
  // return (
 
  //   <div>
  //        { name }
  //     <button onClick={onClick}> Click Me!</button>
  //   </div>
  // )

  

};




export default App;
