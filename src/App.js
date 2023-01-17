import './App.css';
import Calendar from './components/Calendar';
import GoogleOAuth from "./components/GoogleOAuth";

function App() {
  return (
    <div className="App">
      <GoogleOAuth/>
      <Calendar />
    </div>
  );
}

export default App;