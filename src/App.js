import "./App.css";
import Pallete from "./Pallete";
import seedColors from "./seedColors";

function App() {
  return (
    <div>
      <Pallete {...seedColors[4]}></Pallete>
    </div>
  );
}

export default App;
