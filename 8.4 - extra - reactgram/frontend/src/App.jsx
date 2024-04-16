import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { useAuth } from './hooks/useAuth.js';
import EditProfile from './pages/EditProfile/EditProfile.jsx';
import Profile from './pages/Profile/Profile.jsx';
const App = () => {
  const { auth, isLoading } = useAuth();

  if (isLoading) return <p>carregando...</p>;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="container">
          <Routes>
            <Route
              path={'/'}
              element={auth ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path={'/profile'}
              element={auth ? <EditProfile /> : <Navigate to="/login" />}
            />
            <Route
              path={'/users/:id'}
              element={auth ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
              path={'/login'}
              element={!auth ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path={'/register'}
              element={auth ? <Navigate to="/" /> : <Register />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
