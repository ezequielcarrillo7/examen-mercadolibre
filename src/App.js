import Header from './components/Header'
import ItemList from './components/ItemList'

import {Route, useHistory, Switch} from 'react-router-dom';

import {useState} from 'react';



function App() {

  const [searchResults, setSearchResults] = useState({});

  const history = useHistory();

  const getItems = (searchText)=>{
    fetch(`http://localhost:5000/api/items?q=${searchText}`)
      .then(response => response.json())
      .then(response => {
        if(response.error){
          console.error(response)
        }else{
          setSearchResults(response)
          console.log(response.items)
          history.push(`/items?search=${searchText}`)
        }
      })
  }

  return (
    <Route>
      <div className="App">
        <Header onSubmit={searchText => getItems(searchText)}/>
        {
          <Switch><Route path="/items" exact><ItemList list={searchResults.items}/></Route></Switch>
        }
      </div>
    </Route>
  );
}



export default App;
