// import Title from './comps/Title';
// import { collection, getDocs } from 'firebase/firestore';
import Events from './comps/Events';
import Login from './comps/Login';
import Signup from './comps/Signup';
import { Routes, Route } from 'react-router-dom';

 function App() {

  return (
    <div className="App">

   <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Events/>} />
   </Routes>
    </div>
  );
}
 export default App;
