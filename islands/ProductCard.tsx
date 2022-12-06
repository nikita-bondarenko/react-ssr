import {Product} from "../utils/types.ts";
import {useState} from "preact/hooks";

type ProductCardProps = {
    product: Product
}

const ProductCard = ({product} :ProductCardProps) => {

    const [isDetailsShown, setIsDetailsShown] = useState(false)

    const toggle = () => {
        setIsDetailsShown(prev => !prev)
    }
    return (
        <div class="border rounded px-4 py-2 mb-2 flex flex-col justify-center items-center">
            <img src={product.image} alt={product.title} class={"w-1/6"}/>
            <h2 class={"font-bold text-lg"}> {product.title}</h2>
            <p class={"font-bold"}>{product.price}</p>
            <a href={`/product/${product.id}`}>More</a>
            <button onClick={() => toggle()} class={"rounded border py-2 px-4 bg-red-400 text-white"}> Toggle Description</button>
            {isDetailsShown && <p>{product.description}</p>}
        </div>
    );
};

export default ProductCard;