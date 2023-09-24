import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import { convertNumberToPrice } from './formatPriceMoney';

export async function fetchProducts() {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    });

    const products = response.data.map((product) => {
        const priceStripe = product.default_price as Stripe.Price;
        const price = priceStripe.unit_amount ? priceStripe.unit_amount / 100 : 0;
        const formatPrice = convertNumberToPrice(price);

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            oldPrice: formatPrice,
            price: formatPrice,
        };
    });

    return products;
}