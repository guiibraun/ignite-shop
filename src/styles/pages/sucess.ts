import { styled } from "..";

export const SucessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '2xl',
        color: '$gray100',
        
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        color: '$green500',
        fontSize: '$lg',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300'
        }
    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 130,
    height: 145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: '4rem',

    img: {
        objectFit: 'cover'
    }
})