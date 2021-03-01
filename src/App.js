import "./css/App.css";
import TopBar from "./components/TopBar";
import MainContainer from "./containers/MainContainer";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <div className="App">
      <ToolBar />
      <MainContainer />
    </div>
  );
}

export default App;
