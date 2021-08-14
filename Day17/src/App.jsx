import React from 'react';
import Card from './component/Card';
import "./App.css";

function App(props) {
  return (
    <div>
     <div className="App">
       <div className="container">
         <div className="head">
           <h1><strong>Calorie Dashboard</strong> </h1>
         </div>
         <Card title= "samosa" cal= "500" />
         <Card title="Pizza" cal="56"/>
        <Card title="Burger" cal="69"/>
        <Card title="Coke" cal="500"/>
        <Card title="Browne" cal="180"/>
        <Card title="Fried Rice" cal="90"/>
        <Card title="Lassania" cal="200"/>
        <Card title="Pani Puri" cal="10"/>
       </div>
     </div>
    </div>
  )
}

export default App

