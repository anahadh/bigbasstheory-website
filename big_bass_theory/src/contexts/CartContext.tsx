import { createContext, useState, ReactNode } from "react"
import { fishingProducts, apparelProducts } from "../products"

type Product = {
    id: string;
    name: string;
    tag: string;
    price: number;
    modalInfo: string;
    link: string;
};
  
interface CartProviderProps {
    children: ReactNode;
}

export const ShoppingCartContext = createContext<{
    items: Product[];
    getCartSize: () => number;
    addToCart: (id: string) => void;
    deleteFromCart: (id: string) => void;
    getTotalCost: () => number;
}>({
    items: [],
    getCartSize: () => 0,
    addToCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => 0,
});
  
export const ShoppingCartProvider = ({ children }: CartProviderProps) => {
    const [cartProducts, setCartProducts] = useState<Product[]>([]);

    function getCartSize(): number {
      return cartProducts.length;
    }
  
    function addToCart(id: string) {
      let item = fishingProducts.find(product => product.id === id);
  
      if (item == undefined) {
        item = apparelProducts.find(product => product.id === id);
  
        if (item == undefined) {
          return;
        }
      }
  
      setCartProducts([...cartProducts, item]);
    }
  
    function deleteFromCart(id: string) {
      setCartProducts(cartProducts => cartProducts.filter(product => product.id !== id));
    }
  
    function getTotalCost(): number {
      return cartProducts.reduce((total, product) => total + product.price, 0);
    }
  
    const contextValue = {
      items: cartProducts,
      getCartSize,
      addToCart,
      deleteFromCart,
      getTotalCost,
    };
  
    return (
        <ShoppingCartContext.Provider value={contextValue}>
            {children}
        </ShoppingCartContext.Provider>
    )
};