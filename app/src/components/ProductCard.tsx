import {Product} from "@prisma/client";
import Link from "next/link";
import PriceTag from "@/components/PriceTag";
import Image from "next/image";

interface ProductCardProps {
    product: Product
}

function truncate(source: string, size: number) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
}

export default function ProductCard({product}: ProductCardProps) {
    const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;

    return (
        <Link
            href={'/products/' + product.id}
            className={'card w-full bg-base-100 hover:shadow-xl transition-shadow'}
        >
            <figure>
                <Image
                    src={`${product.imageUrl}`}
                    alt={product.name}
                    width={800}
                    height={400}
                    className={'h-48 object-cover'}
                />
            </figure>
            <div className={'card-body'}>
                <h2 className={'card-title'}>
                    {product.name}

                </h2>
                {isNew &&
                    <span className={'badge badge-error text-base-100'}>
                        NEW
                    </span>
                }
                <p>
                    {
                        truncate(product.description, 149)
                    }
                </p>
                <PriceTag price={product.price}/>
            </div>
        </Link>
    )
}