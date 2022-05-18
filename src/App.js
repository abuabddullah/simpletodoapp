import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToDo from './components/todoPage/ToDo';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/login/Login';
import RequireAuth from './components/login/RequireAuth';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <ToDo />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
