import { RouterProvider } from 'react-router-dom';
import './App.css';
import { primaryRoute } from './routes/PrimaryRoute';
import './index.css'
import './styles/scss/Fe.scss';

function App() {

  return (
    <RouterProvider router={primaryRoute} />
  );
}

export default App
