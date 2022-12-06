import {Head} from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.tsx";
import {Handlers, PageProps} from "$fresh/src/server/types.ts";
import {Product} from "../utils/types.ts";
import ProductCard from "../islands/ProductCard.tsx";

export const handler: Handlers<Product[] | null> = {
    async GET(_, ctx) {
        const res = await fetch('https://fakestoreapi.com/products')
        const products = await res.json() as Product[]
        if (!products) {
            return ctx.render(null)
        } else {
            return ctx.render(products)
        }
    }
}

export default function Home({data: products}: PageProps<Product[] | null>) {
    if (!products) return (
        <>
            <Head>
                <title>Fresh App</title>
            </Head>
            <Navigation></Navigation>
            <p>No products!</p>
        </>
    )

    return (
        <>
            <Head>
                <title>Fresh App</title>
            </Head>
            <Navigation></Navigation>
            <div class="p-4 mx-auto max-w-screen-md mt-[50px]">
                 <div>
                    {products.map(item => (
                        <ProductCard key={item.id} product={item}></ProductCard>
                    ))}
                </div>
            </div>
        </>
    );
}
