import { styled } from ".."


export const HeaderContainer = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

export const MiniCart = styled('button', {
    backgroundColor: '$gray800',
    padding: '0.5rem',
    borderRadius: 8,
    position: 'relative',
    border: 0,

    svg: {
        color: '$gray500',
        border: '1px solid $gray900',
    },

    span: {
        position: 'absolute',
        top: '-15px',
        right: '-5px',

        backgroundColor: '$green300',
        height: '1.25rem',
        width: '1.25rem',

        fontSize: '0.875rem',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: '50%'
    }
})

