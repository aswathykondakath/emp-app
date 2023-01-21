import './App.css';
import Home  from './components/Home';
import AddEmp from './components/AddEmp';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
       <div>
      
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
     
          
          <Route path='/AddEmp' element={<AddEmp />} />
         
        </Routes>


      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
