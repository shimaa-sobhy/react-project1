import { RouterProvider, createHashRouter } from 'react-router-dom'
import About from './Componant/About/About'
import Portfolio from './Componant/Portfolio/Portfolio'
import Conatct from './Componant/Conatct/Conatct'
import Layout from './Componant/Layout/Layout'
import Home from './Componant/Home/Home'

let x= createHashRouter([
  {path:'',element:<Layout/>,children:[
    {path:'',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/portfolio',element:<Portfolio/>},
    {path:'/conatct',element:<Conatct/>},
  ]}
])


function App() {


  return <RouterProvider router={x}>

  </RouterProvider>
}

export default App
