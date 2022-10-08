import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Main from './Layout/Main';
import Shope from './component/Shope/Shope';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import { ProductsAndCartLoader } from './Loaders/ProductsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shope></Shope>
        },
        {
          path: '/orders',
          loader: ProductsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
