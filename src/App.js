
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import ShopPage from './components/halal-shop/halalShop.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
