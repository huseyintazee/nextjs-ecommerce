import {prisma} from "@/lib/db/prisma";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
    const products = await prisma.product.findMany({
        orderBy: {id: "desc"}
    })

    return (
        <div>
            <ProductCard product={products[0]}/>
        </div>
    );
}
