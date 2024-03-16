import {getCart} from "@/lib/db/cart";
import CartEntry from "@/app/cart/CartEntry";
import {setProductQuantity} from "@/app/cart/actions";
import {formatPrice} from "@/lib/format";

export const metadata = {
    title: "Your Cart - Tazmazon",
}
export default async function CartPage() {
    const cart = await getCart();

    return (
        <div>
            <h1 className={'mb-6 text-3xl font-bold'}>Shopping Cart</h1>
            {
                cart?.items.map(cartItem => (
                    <CartEntry cartItem={cartItem} key={cartItem.id} setProductQuantity={setProductQuantity}/>
                ))
            }
            {!cart?.items.length && <p>Your cart is empty.</p>}
            <div className={'flex flex-col items-end sm:items-center'}>
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">{formatPrice(cart?.subtotal || 0)}</p>
                        </div>
                    </div>
                    <button
                        className="mt-6 w-full rounded-md btn btn-primary py-1.5">Checkout
                    </button>
                </div>
            </div>

        </div>
    )
}