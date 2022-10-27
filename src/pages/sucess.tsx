import { GetServerSideProps } from "next";
import Image from 'next/future/image'
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, Images } from "../styles/pages/sucess";
import { SucessContainer } from "../styles/pages/sucess";

interface SucessProps {
    customerName: string,
    products: {
        id: string
        images: string,
    }[]
}

export default function Sucess({ customerName, products }: SucessProps) {
    console.log(products)

    return (
        <SucessContainer>
            <h1>Compra efetuada</h1>
            
            <Images>
             {products.map(item => {
                return (
                    <ImageContainer key={item.id}>
                        <Image src={item.images[0]} alt='' width={120} height={110} />
                    </ImageContainer>
                )
            })}
            </Images>


            <p>
                Uuuul <strong>{customerName}</strong>, sua <strong>{products.length}</strong> já está a caminho da sua casa.
            </p>

            <Link href={"/"}>
                Voltar ao catálogo
            </Link>
        </SucessContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    const sessionId = String(query.session_id)
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items.data', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name
    const products = session.line_items.data.map(item => {
        return item.price.product as Stripe.Product
    }) 
    return {
        props: {
            customerName,
            products
        }
    }
}