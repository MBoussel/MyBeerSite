import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BeerPage from './pages/BeerPage.tsx';
import HomePage from './pages/HomePage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
{
  element: <App />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/BeerPage",
     element: <BeerPage />,
    },
    {
      path: "*",
      element: <h1>You are Lost!</h1>,
    },
 ],
},
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
