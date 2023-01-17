import logo from './logo.svg';
import './App.css';
import UserdataForm from './components/UserdataForm';
import UserList from './components/UserList';
import Routers from './components/Router';
import Header from './components/Header';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter >
        <Routes>

          <Route path='/' element={<UserList />} />
          <Route path="register" element={<Register />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
