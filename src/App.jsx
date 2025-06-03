
import Header from './Header';
import Footer from './Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Private from './pages/Private';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
    
      <Routes className='content'>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/private' element={<Private/>}/>

      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
