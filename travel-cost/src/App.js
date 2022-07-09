import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import CostDetails from './CostDetails'
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
            <Route path="/create">
              <Create />            
            </Route> 
            <Route path="/costs/:id">
              <CostDetails></CostDetails>
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
