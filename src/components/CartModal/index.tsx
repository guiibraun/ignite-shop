import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import Image from 'next/future/image'
import { X } from 'phosphor-react'

import { useShoppingCart } from 'use-shopping-cart'
import { CartClose, CartContent, CartInfos, CartItems, CartItemsContent, CartOverlay, ImageContainer, Infos, ItemsOnTop } from '../../styles/pages/modal'


export function CartModal() {
    const { cartDetails, cartCount, totalPrice, removeItem } = useShoppingCart()

    const cartItem = Object.entries(cartDetails)
    console.log(cartDetails)

    return (
        <Dialog.Portal>
            <CartOverlay />

            <CartContent>
                <CartClose>
                    <X size={24} />
                </CartClose>
                <ItemsOnTop>
                    <Dialog.Title>
                        Sacola de compras
                    </Dialog.Title>

                    {cartItem.map(cart => (
                        <CartItems key={cart[0]}>
                            <ImageContainer>
                                <Image src={cart[1].image} alt='' width={110} height={120} />
                            </ImageContainer>
                            <CartItemsContent>
                                <h6>{cart[1].name}</h6>
                                <span>{new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(cart[1].price)}</span>
                                <button onClick={() => removeItem(cart[1].id)}>Remover</button>
                            </CartItemsContent>
                        </CartItems>
                    ))}
                </ItemsOnTop>

                <CartInfos>
                    <Infos size="small">
                        <h2>Quantidade</h2>
                        <span>{cartCount} itens</span>
                    </Infos>
                    <Infos size="big">
                        <h2>Valor total</h2>
                        <span>{new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(totalPrice)}</span>
                    </Infos>


                    <button>Finalizar Compra</button>
                </CartInfos>

            </CartContent>
        </Dialog.Portal>
    )
}