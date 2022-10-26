import Link from 'next/link'
import { Handbag, X } from 'phosphor-react'
import { HeaderContainer, MiniCart } from '../../styles/pages/header'
import Image from 'next/future/image'
import logoImg from '../../assets/logo.svg'
import { useShoppingCart } from 'use-shopping-cart'
import * as Dialog from '@radix-ui/react-dialog'
import { CartModal } from '../CartModal'

export function Header() {
    const { cartCount } = useShoppingCart()

    return (
        <HeaderContainer>
            <Link href="/">
                <Image src={logoImg} alt='' />
            </Link>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <MiniCart>
                        <span>{cartCount}</span>
                        <Handbag weight='bold' size={23} />
                    </MiniCart>
                </Dialog.Trigger>

                <CartModal />
            </Dialog.Root >
        </HeaderContainer>

    )
}