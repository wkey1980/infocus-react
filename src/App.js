import './App.css';
import { GlobalStyles } from './GlobalStyles.styles';
import HomePage from './Components/HomePage/HomePage';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
