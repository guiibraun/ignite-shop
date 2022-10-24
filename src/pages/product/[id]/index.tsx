import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import { useRouter } from "next/router"
import Stripe from "stripe"
import { stripe } from "../../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../../styles/pages/product"

interface ProductProps {
    product: {
        id: string,
        description: string
        name: string,
        imageUrl: string,
        price: string
    }
}

export default function Product({ product }: ProductProps) {
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} alt='' width={520} height={480} />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_MfoCzL4YD45J5g' } }
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['dafault_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                description: product.description,
                price: new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(price.unit_amount / 100),
            }
        },
        revalidate: 60 * 60 * 1 //1 hour
    }
}
