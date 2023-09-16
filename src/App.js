import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Root from './[layouts]/Root';
import { Homepage } from './pages/home/Homepage';
import { Provider } from 'react-redux';
import store from './[store]/store';
import { Products } from './pages/products/Products';
import { About } from './pages/about/About';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import Product from './pages/products/Product';
import Cart from './pages/cart/Cart';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={<Homepage />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Product/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  ))

function App() {
  return (
    <div className="App w-screen ">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </div>
  );
}

export default App;
