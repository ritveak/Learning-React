import React from 'react'
import Restaurant from './component/basics/Restaurant'
import {
	BrowserRouter as Router,
	Routes,
	Route} from 'react-router-dom';
import Home from './component/basics/Home';
import About from './component/basics/About';
import Nvbr from './component/basics/Nvbr';

const App = () => {
  return (
    <Router>
     <Nvbr/>
<Routes>
    <Route exact path='/' element={< Home/>}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/restaurant' element={<Restaurant/>}></Route>
      </Routes>
      
    </Router>
    
  )
}

export default App
