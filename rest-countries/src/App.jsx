import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import BaseLayout from './pages/BaseLayout';
import Landing, { loader as landingLoader } from './pages/Landing';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Navigate to="/countries" replace />,
          },
          {
            path: 'countries',
            element: <Landing />,
            loader: landingLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
