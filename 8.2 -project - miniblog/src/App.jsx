import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreatePost from "./pages/CreatePost/CreatePost";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication";
import "./App.css";
import Search from "./pages/Search/Search";
import Post from "./pages/SinglePost/Post";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  const loadingUser = user === undefined;

  if (loadingUser) return <p>carregando...</p>;

  console.log("user ->",user);
  return (
    <main className="App">
      <AuthContextProvider value={{ user }}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />

              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />

              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <navigate to="/login" />}
              />

              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </main>
  );
}

export default App;
