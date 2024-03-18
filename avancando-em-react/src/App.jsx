import "./App.css";
import ImageWrapper from "./components/ImagesWrapper/ImageWrapper";
import ChildrenProp from "./components/ManageData/ChildrenProp";
import ConditionalRendering from "./components/ManageData/ConditionalRendering";
import List from "./components/ManageData/List";
import PreviosState from "./components/ManageData/PreviosState";
import State from "./components/ManageData/State";
import UsingProps from "./components/ManageData/UsingProps";
import StateLiftWrapper from './components/ManageData/StateLift/StateLiftWrapper'

function App() {
  return (
    <>
      <ImageWrapper />
      <State />
      <List />
      <PreviosState />
      <ConditionalRendering />
      <UsingProps name="Jorge" age={20} />
      <ChildrenProp>
        <p>Conteudo via children</p>
      </ChildrenProp>
      <StateLiftWrapper/>
    </>
  );
}

export default App;
