import "./App.css";
import { APIMessage } from "./components/APIMessage";
import { Counter } from "./components/Counter";

function App() {
    return (
        <div className="App">
            <Counter />
            <APIMessage />
        </div>
    );
}

export default App;
