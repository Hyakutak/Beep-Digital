import { styled } from '../../../../../stitches.config';

export const CentralBannerImage = styled('section', {
    paddingTop: '72%',
    position: 'relative',
    width: '100%',

    '@mobileL': {
        paddingTop: '45%'
    },

    '&:hover': {
        'span': {
            background: '$orange'
        }
    },

    img: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    }
});

export const CentralBannerText = styled('header', {
    position: 'absolute',
    zIndex: '3',
    top: '9.58rem',
    right: '3.08rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    gap: '$6',

    h3: {
        color: '$white',
        fontWeight: '$bold',
        fontSize: '1.875rem',
        textTransform: 'uppercase'
    },

    span: {
        background: '$white',
        color: '$blue',
        fontSize: '$sm',
        fontWeight: '$bold',
        textTransform: 'uppercase',
        padding: '$3 $10',
        borderRadius: '$small',
        width: 'fit-content'
    },

    '@tablet': {
        top: '6rem',
        right: '2rem',

        '> h3': {
            fontSize: '$lg'
        },

        '> span': {
            padding: '$2 $5'
        }
    },

    '@mobileL': {
        top: '12rem',
        left: '50%',
        transform: 'translateX(-50%)',

        '> h3': {
            fontSize: '$2xl'
        },

        '> span': {
            padding: '$2 $5'
        }
    },

    '@mobile': {
        top: '5rem',
    },
});