import { FC, useContext } from "react";
import { ShoppingCartContext } from "../contexts/CartContext";

interface ModalProps {
  productName: string;
  productPrice: number;
  productDescription: string;
  productId: string;
  productLink: string;
  productPic: string;
  onClose: () => void;
}

const ProductModal: FC<ModalProps> = (props) => {
  const cart = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    cart.addToCart(props.productId)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center h-auto max-h-3xl font-info">
      <div className="relative w-full max-w-2xl p-6 bg-gray-200 rounded-lg shadow-2xl">
        {/* Close Button */}
        <button
          onClick={props.onClose}
          className="absolute text-xl font-bold text-gray-600 top-4 right-6 hover:text-black"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex items-stretch gap-6">
          {/* Image Placeholder */}
          <div className="flex flex-grow flex-shrink-0 h-full rounded-md aspect-square">
            <img className="shadow-md h-[350px] aspect-square rounded-2xl" src={props.productPic} />
          </div>

          {/* Product Details */}
          <div className="flex flex-col flex-grow">
            <h2 className="text-4xl font-bold">{props.productName}</h2>
            <p className="mt-4 text-3xl font-bold">{`$${props.productPrice.toFixed(
              2
            )}`}</p>

            <div className="flex-grow mb-6"></div>

            <div className="flex flex-col gap-3">
              <button onClick={handleAddToCart}  className="px-4 py-2 font-bold text-black transition-all duration-150 rounded bg-accent/80 hover:bg-accent active:scale-90">
                Add to Cart
              </button>
              <a href={props.productLink}  className="px-4 py-2 font-bold text-center text-black transition-all duration-150 rounded bg-secondary/80 hover:bg-secondary active:scale-90">
                Buy Now
              </a>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <p className="mt-6 text-2xl text-gray-600">{props.productDescription}</p>
      </div>
    </div>
  );
};

export default ProductModal;