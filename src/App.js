import './App.css';
import WordCard from './WordCard';

const myCollection = [
  "Hello",
  "สวัสดี",
  "Hi"
];

const randomWord = myCollection[Math.floor(Math.random()*myCollection.length)];

function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <WordCard value={randomWord}/>
      <button onClick={refreshPage}>Reset</button>
    </div>
  );
}

export default App;
