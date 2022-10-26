import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import Image from 'next/future/image'
import { X } from 'phosphor-react'

import { useShoppingCart } from 'use-shopping-cart'
import { CartClose, CartContent, CartInfos, CartItems, CartItemsContent, CartOverlay, ImageContainer, Infos, ItemsOnTop } from '../../styles/pages/modal'


export function CartModal() {
    const { cartDetails, cartCount, totalPrice, removeItem } = useShoppingCart()

    console.log(cartDetails)
    async function handleCheckout() {
        try {
            const response = await axios.post('/api/checkout', {
                cart: cartDetails
            })
            const { checkoutUrl } = response.data
            /* window.location.href = checkoutUrl */
        } catch (error) {
            alert('error')
        }
    }

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

                    {Object.keys(cartDetails).map(sku => {
                        const { name, image, price, id } = cartDetails[sku]

                        return (
                            <CartItems key={sku}>
                                <ImageContainer>
                                    <Image src={image} alt='' width={110} height={120} />
                                </ImageContainer>
                                <CartItemsContent>
                                    <h6>{name}</h6>
                                    <span>{new Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(price)}</span>
                                    <button onClick={() => removeItem(id)}>Remover</button>
                                </CartItemsContent>
                            </CartItems>
                        )
                    })}
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


                    <button onClick={handleCheckout}>Finalizar Compra</button>
                </CartInfos>

            </CartContent>
        </Dialog.Portal>
    )
}