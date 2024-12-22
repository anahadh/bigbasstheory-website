import { FC, useContext } from 'react';
import CartItem from './CartItem';
import { ShoppingCartContext } from '../contexts/CartContext';

type ModalAttributes = {
    isCartOpen: boolean,
    onCartOpen: () => void,
    onCartClose: () => void
}

const CartModal:FC<ModalAttributes> = (props) => {
    const cart = useContext(ShoppingCartContext)

    const handleCheckout = async () => {
        await fetch("https://localhost:5173/checkout", {
            method: "POST",
            headers: {
                "Conent-Type": "application/json"
            },
            body: JSON.stringify({
                items: cart.items.map(product => ({
                    price: product.id, // Assuming the product ID is the Stripe Price ID
                    quantity: 1,  // Add quantity if needed
                }))
            })
        }).then(response => {
            return response.json()
        }).then(response => {
            if (response.url) {
                window.location.assign(response.url)
            }
        })
    }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${props.isCartOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-2'}`}>
      <div className="w-full max-w-5xl p-8 bg-green-100 rounded-lg shadow-lg">
        <div className="flex items-center justify-between pb-4 mb-4 border-b">
          <h2 className="text-5xl font-bold font-title">Your Products</h2>
          <button
            className="text-3xl text-gray-500 hover:text-gray-800 size-12"
            onClick={props.onCartClose}
          >
            &times;
          </button>
        </div>

        <div className="grid w-full grid-cols-3 gap-8">
            {cart.getCartSize() == 0 ?
                <p>No Products In Cart</p> :
                cart.items.map(product => (
                    <CartItem productId={product.id} productName={product.name} productPrice={product.price}/>
                ))
            }
        </div>

        <div className="flex flex-row text-5xl h-[100px] mt-12 font-bold">
            Total Price: ${cart.getTotalCost().toFixed(2)}
            <button className='w-full h-full bg-accent font-info transition-all duration-100 ease-in-out hover:bg-accent/80 hover:scale-y-105 hover:scale-x-[1.025] active:scale-90' onClick={handleCheckout}>
                PURCHASE NOW
            </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;