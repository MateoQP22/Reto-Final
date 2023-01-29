import { RouterProvider } from 'react-router-dom';
import './App.css';
import { primaryRoute } from './routes/PrimaryRoute';


function App() {

  return (
    <RouterProvider router={primaryRoute} />
  );
}

export default App;
