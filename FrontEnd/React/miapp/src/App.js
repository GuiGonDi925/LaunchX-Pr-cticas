import './App.css';
import ReactDOM from 'react-dom/client';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
    const element = (
        <div className="App">
          <header className="App-header">
            <h1>La hora actual es:</h1>
            <h2>México {new Date().toLocaleTimeString('es-MX')}</h2>
            
          </header>
        </div>
    );
  root.render(element)
}

export default App;
