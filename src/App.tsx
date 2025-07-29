import "./App.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main">
        <Slider />
      </main>
    </div>
  );
}

export default App;
