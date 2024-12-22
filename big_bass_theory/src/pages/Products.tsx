import ProductDisplay from "../components/ProductDisplay"
import ProductModal from "../components/ProductModal"
import { fishingProducts, apparelProducts } from "../products"
import { useState } from "react"

const Products = () => {
    const [isModal, setIsModal] = useState(false);
    const [fishingSelected, setFishingSelected] = useState(false);
    const [apparelSelected, setApparelSelected] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<typeof fishingProducts[0] | null>(null);

    const handleViewOpen = (product: typeof fishingProducts[0]) => {
        if (isModal == true) {
            return;
        }

        setIsModal(true);
        setSelectedProduct(product);
    }

    const handleViewClose = () => {
        setIsModal(false);
        setSelectedProduct(null);
    }

    return (
        <div className='flex flex-col items-center w-screen h-screen bg-gray-100'>
        {/* Banner Section */}
            <header className={`w-full py-20 text-center text-white bg-primary/90 transition-opacity duration-200 ${isModal ? 'opacity-30' : 'opacity-100'}`}>
                <h1 className="font-black mt-44 text-7xl font-title">Shop Big Bass Theory</h1>
                <p className="mt-10 text-4xl font-info">Browse our variety of products</p>
            </header>

            {/* Placeholder for Products */}
            <main className={`flex w-full divide-x-4 transition-opacity duration-200 ${isModal ? 'opacity-30' : 'opacity-100'}`}>
                <div className="flex flex-col items-center w-1/4 h-screen p-10 bg-background">
                    <p className="relative flex font-title text-5xl mb-10 italic font-bold before:absolute before:bottom-[-13px] before:left-0 before:h-[5px] before:w-full before:bg-black">Select Gear Type</p>
                    <div className="space-y-5 font-info">
                        <label className="flex items-center justify-center space-x-5">
                            <input type="checkbox" className="border-4 border-black rounded-none size-8 active:bg-black" />
                            <span className="text-4xl font-bold">Fishing Gear</span>
                        </label>
                        <label className="flex items-center justify-center space-x-5">
                            <input type="checkbox" className="border-4 border-black rounded-none size-8 active:bg-black" />
                            <span className="text-4xl font-bold">Apparel</span>
                        </label>
                        <label className="flex items-center justify-center space-x-5">
                            <input type="checkbox" className="border-4 border-black rounded-none size-8 active:bg-black" />
                            <span className="text-4xl font-bold">Hunting</span>
                        </label>
                    </div>
                </div>

                <div className="grid w-3/4 h-auto grid-cols-3 p-20 gap-x-3 gap-y-20 bg-background">
                    {fishingProducts.map((product) => (
                        <ProductDisplay
                        key={product.id}
                        {...product}
                        onViewOpen={() => handleViewOpen(product)}
                        />
                    ))}
                    {apparelProducts.map((product) => (
                        <ProductDisplay
                        key={product.id}
                        {...product}
                        onViewOpen={() => handleViewOpen(product)}
                        />
                    ))}
                </div>
            </main>

            {isModal && selectedProduct && 
                    <ProductModal
                        productName={selectedProduct.name}
                        productPrice={selectedProduct.price}
                        productDescription={selectedProduct.modalInfo}
                        productId={selectedProduct.id}
                        productLink={selectedProduct.link}
                        productPic={selectedProduct.pic}
                        onClose={handleViewClose}
                    />}
        </div>
    );
}

export default Products
  