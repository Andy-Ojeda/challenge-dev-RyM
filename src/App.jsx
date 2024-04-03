import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home/Home';


function App() {
 
  return (
    <>
      <div className='contenedor'>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
