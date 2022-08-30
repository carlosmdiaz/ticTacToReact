import './App.css';
import CellsContainer from './Componets/CellsContainer';

function App() {
  return (
    <div className="main-container">
      <div id='title'>Welcom to Tic Tac Toe</div>
      <div className='game-container'>
        <CellsContainer/>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
