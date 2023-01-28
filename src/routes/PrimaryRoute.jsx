import { createBrowserRouter } from 'react-router-dom';
import PrimaryLayout from '../layout/PrimaryLayout';

export const primaryRoute = createBrowserRouter([
    {
        path:'/',
        element: <PrimaryLayout/>
    }
]) 