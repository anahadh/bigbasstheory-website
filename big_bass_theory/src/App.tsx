import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import Landing from "./pages/Landing"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import CartModal from "./components/CartModal"
import { ShoppingCartProvider } from "./contexts/CartContext"

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true)
  }

  const handleCartClose = () => {
    setIsCartOpen(false)
  }

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <nav className="relative flex flex-row items-center w-screen h-[130px] border-b-2 border-b-gray-200 p-8">
          <div className="relative flex flex-row items-center justify-start w-full space-x-4">
            <Link to="/about"  className="relative p-8 text-xl font-light text-center transition duration-200 ease-out bg-transparent font-info h-5/6 hover:bg-black/25">
              ABOUT US
            </Link>

            <Link to="/shop" className="relative p-8 text-xl font-light text-center transition duration-200 ease-out bg-transparent font-info h-5/6 hover:bg-black/25">
              PRODUCTS
            </Link>
          </div>

          <Link to="/">
            <img className="absolute z-50 top-2 left-1/2 -translate-x-1/2 w-[200px] h-auto transition-all duration-200 hover:scale-110 active:scale-90" src="../public/BBTLogo.png" />
          </Link>

          <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-[450px] outline-gray-200 outline aspect-square rounded-full bg-white z-40" />

          <div className="relative flex flex-row items-center justify-end w-full space-x-4">
            <button onClick={handleCartOpen}  className="relative items-center p-2 transition-all duration-300 ease-in-out mr-7 group">
              <div className="absolute inset-0 transition-transform duration-300 ease-in-out scale-0 bg-gray-500 rounded-full -z-10 group-hover:scale-125" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="z-20 transition-all duration-300 ease-in-out size-10 group-hover:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </button>
          </div>
        </nav>

        {isCartOpen && 
        <CartModal isCartOpen={isCartOpen} onCartClose={handleCartClose} onCartOpen={handleCartOpen} />}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/success" element={<div />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
