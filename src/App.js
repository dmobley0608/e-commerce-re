import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Root from './[layouts]/Root';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>

    </Route>
  ))

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
