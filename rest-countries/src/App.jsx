import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import BaseLayout from './pages/BaseLayout';
import Landing, { loader as landingLoader } from './pages/Landing';
import CountryDetail from './pages/CountryDetail';
import Error from './components/Error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const action = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search');
  const region = url.searchParams.get('region');

  if (search) return { search };
  if (region) return { region };

  return {};
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="/countries" replace />,
      },
      {
        path: 'countries',
        element: <Landing />,
        loader: landingLoader(queryClient),
        action: action,
      },
      {
        path: 'countries/:id',
        element: <CountryDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
export default App;
