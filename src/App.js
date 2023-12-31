import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Root from './[layouts]/Root';
import { Homepage } from './pages/home/Homepage';
import { Provider } from 'react-redux';
import store from './store/store';
import { Products } from './pages/products/Products';
import { About } from './pages/about/About';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import Product from './pages/products/Product';
import Cart from './pages/cart/Cart';
import DashboardLayout from './[layouts]/DashboardLayout';
import Dashboard from './pages/dasboard/Dashboard';
import DashboardProducts from './pages/dasboard/products/DashboardProducts';
import Profile from './pages/profile/Profile';






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
      <Route path='/:user/dashboard' element={<DashboardLayout/>}>
            <Route path='' element={<Dashboard/>}/>
            <Route path='products' element={<DashboardProducts/>}/>          
      </Route>
      <Route path='/users/:id/profile' element={<Profile/>}/>
      <Route path="/sign-out" element={<Homepage/>}/>
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
