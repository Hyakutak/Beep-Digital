import { styled } from '../../../../stitches.config';

export const ProductCardContainer = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '$basic',
    border: '1px solid $whiteA',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.23)',

    '&:hover': {
        '.hover-wishlist': {
            visibility: 'visible'
        },

        '.action-container-buttons': {
            visibility: 'visible'
        }
    },

    header: {
        paddingTop: '106%',
        position: 'relative',
        width: '100%',
        display: 'block',
        background: '$whiteA',
        borderRadius: '$basic',

        img: {
            position: 'absolute',
            top: 0,
            left: 0,
            objectFit: 'contain'
        }
    },
    
    footer: {
        padding: '$11',
        textAlign: 'center',

        h2: {
            fontSize: '$sm',
            fontWeight: '$regular',
            color: '$black200',
            textTransform: 'uppercase',
            marginBottom: '1.19rem'
        },


        p: {
            marginBottom: '$2',
            color: '$black200',
            fontWeight: '$regular',
            textTransform: 'uppercase',
            fontSize: '$xs'
        }
    }
});

export const ContainerPrice = styled('section', {
    marginBottom: '$3',

    s: {
        fontSize: '$sm',
        fontWeight: '$regular',
        textTransform: 'uppercase',
        color: '$black700'
    },

    span: {
        color: '$black200',
        fontWeight: '$bold',
        textTransform: 'uppercase',
        fontSize: '$2xl',
        marginLeft: '$2'
    },
});

export const PromotionValue = styled('div', {
    background: '$blackC',
    borderRadius: '$basic',
    position: 'absolute',
    top: '.62rem',
    left: '.62rem',
    padding: '.25rem .62rem',
    fontSize: '$xs',
    color: '$white',
    fontWeight: '$bold',
});

export const WishlistCard = styled('div', {
    position: 'absolute',
    top: '.62rem',
    right: '.62rem',
    color: '$white',
    padding: '$2',
    borderRadius: '$full',
    background: '$grayB',
    display: 'flex',
    alignItems: 'center',
    visibility: 'hidden',

    '@tablet': {
        visibility: 'visible'
    }
});

export const ActionsContainer = styled('section', {
    visibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '1.25rem',

    '@mobileL': {
        visibility: 'visible'
    },

    button: {
        all: 'unset',
        background: '$green',
        padding: '$4 $10',
        color: '$white',
        fontSize: '$xl',
        fontWeight: '$bold',
        textAlign: 'center',
        borderRadius: '$basic',

        '&:hover': {
            opacity: '.8'
        }
    }
});

export const ActionQuantidy = styled('div', {
    background: '$whiteA',
    maxWidth: '5.125rem',
    height: '3.625rem',
    textAlign: 'center',
    borderRadius: '$basic',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    '.arrow-down': {
        bottom: '$4'
    },

    '.arrow-up': {
        top: '$4'
    },

    input: {
        all: 'unset',
        width: '100%',
        color: '$gray800',
        fontSize: '$xl',

        '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none'
        },
        '&::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none'
        }
    },

    'input[type=number]': {
        '-moz-appearance': 'textfield'
    },

    svg: {
        color: '$blue',
        position: 'absolute',
        right: '$2',
        cursor: 'pointer'
    }
});