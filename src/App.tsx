import './App.css';
import { BrowserRouter as Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return ( 
    <Route>
      <Home />
    </Route>
  );
}

export default App;
