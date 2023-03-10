import { createBrowserRouter } from 'react-router-dom';
import MainContact from '../components/contact/MainContact';
import ErrorRouter from '../components/error/ErrorRouter';
import PrimaryLayout from '../layout/PrimaryLayout';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';

export const primaryRoute = createBrowserRouter([
    {
        path:'/',
        element: <PrimaryLayout/>,
        errorElement: <ErrorRouter/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'productos',
                element: <ProductsPage/>
            },
            {
                path: 'nosotros',
                element: <h1>Nosotros</h1>
            },
            {
                path: 'contactos',
                element: <MainContact/>
            }
        ]
    }
]); 