import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

function App() {
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={ <Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      </Route>
     </Routes>

    </BrowserRouter>
  )
}

export default App
