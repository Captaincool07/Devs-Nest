import {useState, createContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from './Components/Welcome'
import About from './Components/AboutUs'
import LoggedIn from './Components/LoggedIn'

const Lcontext = createContext();


function App() {
  
  const [login, setLogin] = useState(false);
  const auth = {login: login, setLogin: () => {setLogin(!login)}};
  return (
    <div className="App">
      <Router>
        
        <Lcontext.Provider value={auth}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/loggedIn" component={LoggedIn} />
          </Switch>
        </Lcontext.Provider>
        
      </Router>
    </div>
  );
}

export default App;
export {Lcontext};