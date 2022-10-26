import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '100vh',

    justifyContent: 'center'
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

export const MiniCart = styled('div', {
    backgroundColor: '$gray800',
    padding: '0.5rem',
    borderRadius: 8,

    svg: {
        color: '$gray500'
    }
})