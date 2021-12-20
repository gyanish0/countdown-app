import "./App.css";
import { CountdownTimer } from "./Components/CountdownTimer/CountdownTimer";

function App() {
  return (
    <div className="App">
      <CountdownTimer countdownTimestampMs={1641373400000}/>
    </div>
  );
}

export default App;
