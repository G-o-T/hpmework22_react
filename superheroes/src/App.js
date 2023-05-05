import './App.css';
import CardList from './assets/components/Cardlist';


function App() {
  return (
    <div className="App">
      <header className="header">
          <div className="container">
              <h1 className="h1">Рейтинг супер-героев</h1>
          </div>
      </header>
      <main>
          <div className="container">
              <div className="cards">
                <CardList />
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;
