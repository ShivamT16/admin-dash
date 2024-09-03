import { Outlet, } from 'react-router-dom';
import './App.css';
import { NavBar } from './NavBar';
import {Header} from "./Header"

function App() {
  return (
    <div className="App">
      <NavBar /> 

      <div className='app'> 
       <Header />   
       <Outlet />
      </div> 
    </div>
  );
}

export default App;
