import { createBrowserRouter } from 'react-router-dom';
import ErrorRouter from '../components/error/ErrorRouter';
import MainNosotros from '../components/nosotros/MainNosotros';
import PrimaryLayout from '../layout/PrimaryLayout';

export const primaryRoute = createBrowserRouter([
    {
        path:'/',
        element: <PrimaryLayout/>,
        errorElement: <ErrorRouter/>,
        children: [
            {
                index: true,
                element: <h1>Home</h1>
            },
            {
                path: 'productos',
                element: <h1>Productos</h1>
            },
            {
                path: 'nosotros',
                element: <MainNosotros/>
            },
            {
                path: 'servicios',
                element: <h1>Servicios</h1>
            },
            {
                path: 'contactos',
                element: <h1>Contactos</h1>
            }
        ]
    }
]); 