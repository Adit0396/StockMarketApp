import './App.css';
import { Route,Switch } from 'react-router-dom';
import {BrowserRouter as Router} from'react-router-dom'
import Stock from './Components/Stock'
import Price from './Components/Price';
import Landing from './Components/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Components/logo.png'
import Navigation from './Components/Navigation'
function App() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/">
            <Navigation/>  
            <div className='logo'>
              <img src={logo}
              width='1000px'
              height='700px'
              />
              </div>
              <Landing/>
            </Route>
            <Route path="/stock">
            <Navigation/>            
              <Stock />  
            </Route>
            <Route path="/price/:handle">
            <Navigation/>    
              <Price />
            </Route>
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
}

export default App;
