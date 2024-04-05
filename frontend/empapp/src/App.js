import logo from './logo.svg';

import './App.css';



import { Route, Routes } from 'react-router-dom';
import Navebar from './components/Navebar';
import AddEmp from './components/AddEmp';
import ViewEmployee from './components/ViewEmployee';

function App() {

 return (

   <div className="App">

<Navebar/>

   <Routes>

     <Route path='/' element={<ViewEmployee/>}/>

     <Route path='/add' element={<AddEmp/>} />

   </Routes>

   </div>

 );

}

export default App;

