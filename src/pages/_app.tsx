import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { Container, Header, MiniCart } from '../styles/pages/app'
import Image from 'next/future/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider mode="payment" cartMode='client-only' stripe={process.env.STRIPE_PUBLIC_KEY} currency="BRL" successUrl={process.env.NEXT_URL} cancelUrl={process.env.NEXT_URL}>
      <Container>
        <Header>
          <Link href="/"><Image src={logoImg} alt='' /></Link>
          <MiniCart>
            <Handbag weight='bold' size={23}/>
          </MiniCart>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
