import { FC, MouseEventHandler } from "react"

interface ProductInfo {
    id: string,
    name: string,
    tag: string,
    price: number,
    pic: string,
    onViewOpen: MouseEventHandler<HTMLButtonElement>
}

const ProductDisplay:FC<ProductInfo> = (props) => {
    

    return (
        <div className="flex flex-col w-[90%] h-auto p-4 bg-gray-200 rounded-lg shadow-lg font-info">
            {/* Image Placeholder */}
            <div className="flex items-center justify-center w-full bg-gray-400 rounded-md aspect-square">
                <img className="w-full h-full border-8 rounded-lg border-accent" src={props.pic} />
            </div>

            {/* Product Name */}
            <h3 className="mt-4 text-3xl font-bold">{props.name}</h3>
            
            {/* Product Description */}
            <p className="mt-2 mb-4 text-xl text-gray-700">{props.tag}</p>

            {/* Price and Button */}
            <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold">{`\$${props.price}`}</span>
                <button onClick={props.onViewOpen}  className="px-4 py-1 text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
                + View
                </button>
            </div>
        </div>
    );
}

export default ProductDisplay