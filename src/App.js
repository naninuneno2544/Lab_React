import './App.css';
import WordCard from './WordCard';

const word = "Hello"
function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <WordCard value={word}/>
      <button onClick={refreshPage}>Reset</button>
    </div>
  );
}

export default App;
