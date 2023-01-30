import { createBrowserRouter } from 'react-router-dom';
import ErrorRouter from '../components/error/ErrorRouter';
import MainNosotros from '../components/nosotros/MainNosotros';
import MainContactos from '../components/contactos/MainContactos';
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
                element: <MainNosotros/>
            },
            {
                path: 'contactos',
                element: <MainContactos/>
            }
        ]
    }
]); 