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
    gap: '$7'
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

    input: {
        all: 'unset',
        color: '$gray',
        fontSize: '$sm',
        fontWeight: '$medium',
        textTransform: 'uppercase',
        width: 'calc(100% - 23px)',
        cursor: 'pointer',

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

    a: {
        all: 'unset',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '$2',

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

            '&:hover': {
                color: '$blue'
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
