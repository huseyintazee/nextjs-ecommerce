export function formatPrice(price: number) {
    return (
        (price).toLocaleString('tr-TR', {
            style: 'currency',
            currency: 'TRY'
        })
    )
}