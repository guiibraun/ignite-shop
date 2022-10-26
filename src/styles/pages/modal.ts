import { styled } from ".."
import * as Dialog from '@radix-ui/react-dialog'

export const CartOverlay = styled(Dialog.DialogOverlay, {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    inset: 0,
    cursor: 'pointer',
})



export const CartContent = styled(Dialog.Content, {
    minWidth: '25rem',
    maxWidth: '90%',
    borderRadius: 6,
    padding: '2.5rem 3rem',
    backgroundColor: "$gray800",
    position: 'fixed',
    top: 0,
    right: 0,
    minHeight: '-webkit-fill-available',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    
})

export const ItemsOnTop = styled('div', {

})

export const CartClose = styled(Dialog.Close, {
    position: 'absolute',
    top: 10,
    right: 10,

    backgroundColor: 'transparent',
    color: '$gray500',
    border: 0,
    lineHeight: 0,
    cursor: 'pointer',


})

export const CartItems = styled('div', {
    display: 'grid',
    gridTemplateColumns: '94px 1fr',
    gap: '2rem',
    marginTop: '2rem',
    
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 94,
    height: 94,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})

export const CartItemsContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',


    h6: {
        fontSize: '1.025rem',
        color: '$gray300',
        fontWeight: '400'
    },

    span: {
        fontSize: '1.025rem',
        fontWeight: 'bold'
    },

    button: {
        backgroundColor: 'transparent',
        border: 0,
        textAlign: 'left',
        color: '$green300',
        fontWeight: 'bold'
    }
})

export const CartInfos = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',


    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        borderRadius: 8,
        color: '$white',
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: "$md",

        '&:disabled': {
            opacity: 0.7,
            cursor: 'not-allowed'
        },

        '&:not(:disabled)hover': {
            backgroundColor: '$green300'
        }
    },
})

export const Infos = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    color: '$gray300',



    variants: {
        size: {
            big: {
                h2: {

                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                },

                span: {
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                }
            },

            small: {
                h2: {
                    fontSize: '1rem',
                    fontWeight: '400'
                },

                span: {
                    fontSize: '1.05rem',
                    fontWeight: '400'
                }
            }
        }
    }
})

