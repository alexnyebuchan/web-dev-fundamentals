import Main from "./components/Main";
import "./scss/App.scss";
import terms from "../terms.json";

function App() {
  return (
    <>
      <Main terms={terms} />
    </>
  );
}

export default App;
