import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Widget from './component/Widget';
import Test from './component/TestPage'

function App() {
  return (

  <>
    <div className="m-auto  h-screen     ">
     <Router>
      <Routes>
        <Route exact path='/' element={    <Widget />}/>
        <Route exact path='/test' element={   <Test />}/>
      </Routes>

     </Router>
    
   
     
    </div>
  </>
  );
}

export default App;
