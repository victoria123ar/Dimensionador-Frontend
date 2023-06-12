import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Login, Register } from './pages/index';
import { UserProvider } from './contexts/UserContext';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';

export default function App() {
  return (
    <>
    <ToastContainer />
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
    </UserProvider>
    </>
  );
};