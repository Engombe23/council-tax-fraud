import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Legislation from './pages/Legislation';
import Links from './pages/Links';
import Learning from './pages/Learning';
import LawfulRemedy from './pages/LawfulRemedy';
import Letters from './pages/Letters';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/legislation',
        element: <Legislation/>
      },
      {
        path: '/links',
        element: <Links/>
      },
      {
        path: '/learning',
        element: <Learning/>
      },
      {
        path: '/lawful-remedies',
        element: <LawfulRemedy/>
      },
      {
        path: '/letters',
        element: <Letters/>
      }
    ]
  }
])

export default router;