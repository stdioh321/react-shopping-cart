import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar'
import {Shop, Cart} from './pages/index'
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
