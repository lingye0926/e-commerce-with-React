import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./App.scss"

const Layout = () =>{
  return (
    <div className='app'>
      <Navbar/>
      {/* outlet represent any page */ }
      <Outlet/>
      <Footer/>

    </div>
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}
/*
this is a local message to hceck Stash.

this is a local message to hceck Stash1.
this is new line to check stash.
to be delete.
this is a message to check stash.
*/
export default App;
