import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import BaseLayout from './pages/BaseLayout';
import Landing, { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        errorElement: <div>Not Found</div>,
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
