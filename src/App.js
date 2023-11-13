import Events from './comps/Events';
import Login from './comps/Login';
import Signup from './comps/Signup';
import Account from './comps/Account';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './comps/ProtectedRoute';

 function App() {

  return (
    <div className="App">

    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Events/></ProtectedRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />

      </Routes>
    </AuthContextProvider>
    </div>
  );
}
 export default App;
