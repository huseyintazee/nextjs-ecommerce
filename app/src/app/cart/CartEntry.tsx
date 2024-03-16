"use client";

import {CartItemWithProduct} from "@/lib/db/cart";
import Image from "next/image";
import Link from "next/link";
import {formatPrice} from "@/lib/format";
import {useTransition} from "react";

interface CartEntryProps {
    cartItem: CartItemWithProduct,
    setProductQuantity: (productId: string, quantity: number) => Promise<void>
}

export default function CartEntry({cartItem: {product, quantity}, setProductQuantity}: CartEntryProps) {
    const [isPending, startTransition] = useTransition();

    const quantityOptions: JSX.Element[] = [];
    for (let i = 1; i <= 99; i++) {
        quantityOptions.push(
            <option value={i} key={i}>
                {i}
            </option>
        )
    }

    return (
        <div>
            <div className="rounded-lg md:w-2/3">
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <div className={'flex flex-wrap items-center gap-3'}>
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={200}
                            height={200}
                            className={'w-full rounded-lg sm:w-40'}
                        />
                    </div>
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                            <Link href={'/products/' + product.id} className={'font-bold'}>
                                {product.name}
                            </Link>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div className={'my-1 flex items-center gap-2'}>
                                Quantity:
                                <select
                                    className={'select select-bordered w-full max-w-[80px]'}
                                    defaultValue={quantity}
                                    onChange={e => {
                                        const newQuantity = parseInt(e.currentTarget.value)
                                        startTransition(async () => {
                                            await setProductQuantity(product.id, newQuantity)
                                        })
                                    }}
                                >
                                    <option value={0}>0 (Remove)</option>
                                    {quantityOptions}
                                </select>
                            </div>
                            <div className={'flex items-center gap-3'}>
                                Total: {formatPrice(product.price * quantity)}
                                {isPending && <span className={'loading loading-spinner loading-sm'}></span>}
                            </div>
                            <div className="flex items-center space-x-4">
                                <div>
                                    Price: {formatPrice(product.price)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"divider"}/>
        </div>
    )
}