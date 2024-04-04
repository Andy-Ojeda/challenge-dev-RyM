import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';

function App() {
 
  return (
    <>
      <div className='contenedor'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
