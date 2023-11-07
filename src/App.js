// import Title from './comps/Title';
// import { collection, getDocs } from 'firebase/firestore';
import Events from './comps/Events';
import Login from './comps/Login';
import Signup from './comps/Signup';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

 function App() {

  return (
    <div className="App">

    <AuthContextProvider>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Events/>} />
      </Routes>
    </AuthContextProvider>
    </div>
  );
}
 export default App;
