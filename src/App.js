import Header from './components/Header'
import ItemList from './components/ItemList'
import Detail from './components/Detail'
import Error from './components/Error'



import {Route, useHistory, Switch, Redirect} from 'react-router-dom';

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
          console.log(response.categories)
          history.push(`/items?search=${searchText}`)
        }
      })
  }

  return (
      <div className="App">
        <Header onSubmit={searchText => getItems(searchText)}/>
        {
          <Switch>
            <Route path="/items" exact>
              {
                searchResults.error ? <Error></Error> : searchResults.items ? <ItemList categories={searchResults.categories} list={searchResults.items}/>
                : <Redirect to={"/"}/>
              }
              
            </Route>
            <Route path="/items/:id" component={Detail} />
          </Switch>
        }
      </div>
  );
}



export default App;
