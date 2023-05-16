
import './App.css';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Homepage from './components/Homepage';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
  <NavBar/>
  <Routes>
  <Route path='/'element={<Form/>}></Route>
  <Route path='/add'element={<Homepage/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
