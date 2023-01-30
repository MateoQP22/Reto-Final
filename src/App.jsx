import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { primaryRoute } from './routes/PrimaryRoute';


function App() {
  console.log(import.meta.env.VITE_POKEMON_CMS_API_URL);
  return (
    <Provider store={store}>
    <RouterProvider router={primaryRoute} />
    </Provider>
  );
}

export default App;
