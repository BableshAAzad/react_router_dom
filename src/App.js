import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
