import "./App.css";
import InLineCssComponent from "./components/InLineCssComponent";
import MyModuleCssComponent from "./components/MyModuleCss/MyModuleCssComponent";
import MyComponent from "./components/Mycomponent";
function App() {
  return (
    <>
      <h2> React + CSS</h2>
      <MyComponent />
      <InLineCssComponent />
      <MyModuleCssComponent />
    </>
  );
}

export default App;
