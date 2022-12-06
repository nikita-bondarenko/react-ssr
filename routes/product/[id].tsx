import {Head} from "$fresh/runtime.ts";
import Navigation from "../../components/Navigation.tsx";
import {Handlers, PageProps} from "$fresh/src/server/types.ts";
import {Product} from "../../utils/types.ts";

export const handler: Handlers<Product | null> = {
    async GET(_, ctx) {
        const res = await fetch(`https://fakestoreapi.com/products/${ctx.params.id}`)
        const product = await res.json() as Product
        if (!product) {
            return ctx.render(null)
        } else {
            return ctx.render(product)
        }
    }
}

export default function ProductPage({data: product}: PageProps<Product | null>) {
    if (!product) return (
        <>
            <Head>
                <title>Fresh App</title>
            </Head>
            <Navigation></Navigation>
            <p>Product not found</p>
        </>
    )

    return (
        <>
            <Head>
                <title>Fresh App</title>
            </Head>
            <Navigation></Navigation>
            <div class="p-4 mx-auto max-w-screen-md mt-[50px]">
            <h1 class={"font-bold text-2xl"}>{product.title}</h1>
                <img src={product.image} class={"w-1/3 ml-auto mr-auto"}/>
            </div>
        </>
    );
}
