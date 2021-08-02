import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <div>
      <ListPage />
    </div>
  );
}

export default App;
