import './component/Card';
import './App.css';
import Card from './component/Card';

function App(props) {
  return (
    <div className="App">
     <Card title="Pizza" cal="56"/>
     <Card title="Burger" cal="69"/>
     <Card title="Coke" cal="500"/>
     <Card title="Browne" cal="180"/>
     <Card title="Fried Rice" cal="90"/>
     <Card title="Lassania" cal="200"/>
     <Card title="Pani Puri" cal="10"/>

     
    </div>
  );
}

export default App;
