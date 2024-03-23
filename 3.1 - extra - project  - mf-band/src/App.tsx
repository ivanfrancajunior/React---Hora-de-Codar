import { lazy } from "react";

import Header from "./components/Header/Header";

import Hero from "./components/Hero/Hero";

const Headliners = lazy(() => import("./components/Headliners/Headliners"));
function App() {
  return (
    <main className="bg-zinc-50 dark:bg-zinc-900">
      <Header />
      <Hero />
      <Headliners />
    </main>
  );
}

export default App;
