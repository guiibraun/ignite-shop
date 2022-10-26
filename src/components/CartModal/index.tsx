import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { useShoppingCart } from 'use-shopping-cart'
import { CartClose, CartContent, CartInfos, CartItems, CartItemsContent, CartOverlay, ImageContainer, Infos, ItemsOnTop } from '../../styles/pages/modal'


export function CartModal() {
    const { cartDetails, cartCount, totalPrice } = useShoppingCart()

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

                    <CartItems>
                        <ImageContainer>
                        </ImageContainer>
                        <CartItemsContent>
                            <h6>XXXX</h6>
                            <span>R$ 79,90</span>
                            <button>Remover</button>
                        </CartItemsContent>
                    </CartItems>
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