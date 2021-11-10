import './App.css';
import Nav from './compo/Nav'
import Footer from './compo/Footer';
import Home from './pags/Home'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Menu from './pags/Menu';
import Connect from './pags/Connect';
function App() {
  return (

<diV>
<Router>




<Nav/>

<Routes>

<Route path='/' element ={<Home/>} />
<Route path='/Menu' element={<Menu/>} />
<Route path ='/Connect' element={<Connect/>} />

</Routes>


</Router>

<Footer/>


</diV>



  );
}

export default App;
