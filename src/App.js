import Header from './components/Header'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact component={Header}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
