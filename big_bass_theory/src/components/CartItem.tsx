import { FC, useContext } from "react"
import { ShoppingCartContext } from "../contexts/CartContext"

type CartItemProps = {
    productId: string;
    productName: string;
    productPrice: number;
}

const CartItem:FC<CartItemProps> = (props) => {
    const cart = useContext(ShoppingCartContext)

    return <div className="relative flex flex-col w-full p-10 bg-gray-300 shadow-lg aspect-square rounded-xl">
        <p className="text-2xl font-bold font-info">{props.productName}</p>
        <p className="relative w-full mt-auto text-5xl font-black">${props.productPrice}</p>
        <button onClick={() => cart.deleteFromCart(props.productId)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="absolute flex items-center justify-center p-3 bg-red-500 rounded-full size-10 hover:bg-red-700 active:scale-90 top-5 right-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
}

export default CartItem;