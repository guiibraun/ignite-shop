import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"
import { stripe } from "../../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../../styles/pages/product"

interface ProductProps {
    product: {
        id: string,
        description: string
        name: string,
        imageUrl: string,
        price: number,
        defaultPriceId: string
    }
}

export default function Product({ product }: ProductProps) {
    const { cartDetails } = useShoppingCart()
    const { isFallback } = useRouter()
    const { addItem } = useShoppingCart()

    if (isFallback) {
        return <p>Loading</p>
    }

    async function handleByProduct() {
        addItem({
            name: product.name,
            id: product.id,
            price: product.price,
            price_id: product.defaultPriceId,
            currency: 'BRL',
            image: product.imageUrl,
        })
        /*          try {
                    setIsCreatingCheckout(true)
                    const response = await axios.post('/api/checkout', {
                        priceId: product.defaultPriceId
                    })
                    console.log(response)
                    const { checkoutUrl } = response.data
                    window.location.href = checkoutUrl
        
                } catch (error) {
                    // Conectar com uma ferramenta de observabilidade (Datalog/Sentry)
                    setIsCreatingCheckout(false)
                    console.log(error)
                    alert('Falha redirecionar ao checkout')
                }  */
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} alt='' width={520} height={480} />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(product.price)}</span>

                <p>{product.description}</p>
                <button onClick={handleByProduct}>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_MfoCzL4YD45J5g' } }
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                description: product.description,
                price: price.unit_amount / 100,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1 //1 hour
    }
}
