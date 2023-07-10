import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter,Routes , Route} from 'react-router-dom'
import Order from './pages/home/order/Order';
import Delivery from './pages/home/order/componets/Delivery';
import Dining from './pages/home/order/componets/Dining';
import Nightlife from './pages/home/order/componets/Nightlife';
import FullPrpoduct from './compo/FullPrpoduct';
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/order' exact element={<Order/>}/>
        <Route path='/delivery' exact element={<Delivery/>}/>
        <Route path='/dining' exact element={<Dining/>}/>
        <Route path='/nightlife' exact element={<Nightlife/>}/>
        <Route path='/product-details' exact element={<FullPrpoduct/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
