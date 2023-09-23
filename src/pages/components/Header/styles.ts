import { Container } from '@/styles/global';
import { styled } from '../../../../stitches.config';

export const HeaderWrapper = styled('header', {
    padding: '$5 0',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    background: '$white',
    boxShadow: '0px 3px 7.5px 0px rgba(0, 0, 0, 0.10)'
});

export const HeaderContainer = styled(Container, {
    display: 'flex',
    alignItems: 'center',
    gap: '$7',

    '@tablet': {
        justifyContent: 'space-between'
    },

    '@mobileL': {
        gap: '$2'
    },

    '.no-active': {
        display: 'none'
    },

    '.active': {
        zIndex: 2,
        
        '> nav': {
            background: '$white',
            visibility: 'visible',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',

            ul: {
                flexDirection: 'column',
                gap: '$6',
                alignItems: 'start',
                padding: '$4'
            }
        }
    }
});

export const HeaderInput = styled('div', {
    background: '$gray200',
    padding: '$5',
    borderRadius: '$basic',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,

    '&:hover': {
        background: '$whiteA',

        input: {
            color: '$blue'
        }
    },

    '@mobileL': {
        width: 'fit-content',
        flex: 'unset',
        '.active': {
            position: 'absolute',
            display: 'block',
            visibility: 'visible',
            bottom: '-4rem',
            background: '$white',
            padding: '$4',
            left: '5%',
            width: '80%',
            borderRadius: '$basic'
        }
    },

    input: {
        all: 'unset',
        color: '$gray',
        fontSize: '$sm',
        fontWeight: '$medium',
        textTransform: 'uppercase',
        width: 'calc(100% - 23px)',
        cursor: 'pointer',

        '@mobileL': {
            visibility: 'hidden',
            display: 'none'
        },

        '&::placeholder': {
            color: '$gray'
        }
    },

    svg: {
        color: '$blue'
    }
});

export const HeaderIcons = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$8',

    '@mobileL': {
        gap: '$2'
    },

    a: {
        all: 'unset',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '$2',
        cursor: 'pointer',

        '&:hover': {
            div: {
                color: '$blue'
            }
        },

        svg: {
            backgroundColor: '$blue',
            borderRadius: '$full',
            padding: '$2',
            width: '$2xl',
            height: '$2xl',
            color: '$white'
        },

        aside: {
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
        },

        div: {
            display: 'block',
            fontSize: '$sm',
            color: '$gray800',
            fontWeight: '$regular',
            maxWidth: '6.3125rem',
            textTransform: 'uppercase',
            cursor: 'pointer',

            '@tablet': {
                display: 'none',
                zIndex: 2
            }, 

            span: {
                fontWeight: '$bold'
            },

            '&:last-child': {
                width: '7.4375rem',
                maxWidth: '7.4375rem'
            }

            
        }
    }
});

export const HeaderCountCartItems = styled('section', {
    position: 'absolute',
    borderRadius: '$full',
    background: '$orange',
    top: '$1',
    right: '$1',
    fontWeight: '$bold',
    color: '$gray800',
    fontSize: '$xxs',
    padding: '.05rem .15rem'
});

export const HeaderHamburguer = styled('div',{
    display: 'none',
    cursor: 'pointer',

    svg: {
        color: '$blue',
    },

    '& .close':{
        position: 'absolute',
        top: 0,
        right: '$4',
        zIndex: 101,  
    },
    '@tablet': {
        display: 'block',
    }, 
});
