import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


function App () {
  return (
    <div className="App">
        <Header firstName = { "SAM"} lastName = { "KOH" } Age = { "22" } HairColor = {"Black"} />
        <Header firstName = { "JOHN"} lastName = { "LEE" } Age = { "22" } HairColor = {"Brown"} />
        <Header firstName = { "MITCHELL"} lastName = { "KIM" } Age = { "22" } HairColor = {"Black"} />
        <Header firstName = { "JOHN"} lastName = { "SHIM" } Age = { "22" } HairColor = {"Black"} />
    </div>
  );
}

export default App;
