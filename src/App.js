import './App.css'
import Header from './component/Header';
import Home from './component/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RestaurantDetails from './component/RestaurantDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<RestaurantDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
