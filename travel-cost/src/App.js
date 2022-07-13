import Navbar from './Navbar'
import Home from './Home'
import Create from './CreateCost'
import CostDetails from './CostDetails'
import TravellerDetails from './TravellerDetails'
import Overview from './Overview'
import InitialQuestions from './InitialQuestions'
import Inspect from './Inspect'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
            <Route exact path="/">
              <Home />            
            </Route> 
            <Route path="/Overview">
              <Overview />            
            </Route> 
            <Route path="/Add-Cost">
              <Create />            
            </Route> 
            <Route path="/costs/:id">
              <CostDetails></CostDetails>
            </Route>
            <Route path="/traveller/:id">
              <TravellerDetails></TravellerDetails>
            </Route>
            <Route path="/New-Traveller">
              <InitialQuestions />            
            </Route> 
            <Route path="/Inspect">
              <Inspect></Inspect>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
