import './App.scss';
import Spinner from "./spinner/Spinner";

function App() {
  return (
    <div className="App">
        <div>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-primary btn-disabled">Primary</button>

            <button className="btn btn-primary">
                <Spinner/>
            </button>
        </div>

        <div>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-secondary btn-disabled" >Secondary</button>

            <button className="btn btn-secondary">
                <Spinner/>
            </button>
        </div>
    </div>
  );
}

export default App;
