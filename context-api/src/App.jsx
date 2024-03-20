import Header from './Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <main className="App flex h-screen flex-col items-center justify-star w-full">
        <Header />
        <h2>Context API</h2>
        <Outlet />
      </main>
    </>
  );
}

export default App;
