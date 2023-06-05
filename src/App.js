import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Login, Register } from './pages/index';
import { UserProvider } from './contexts/UserContext';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <>
    <ToastContainer />
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </UserProvider>
    </>
  );
};