import { Container } from '@/styles/global';
import { styled } from '../../../stitches.config';

export const FullBannerContainer = styled('article', {
    position: 'relative'
});

export const SlideProductNavigation = styled('section', {
    position: 'absolute',
    bottom: '50%',
    transform: 'translateY(50%)',
    left: 0,
    zIndex: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 $5',

    '.swiper-button': {
        background: '$orange',
        borderRadius: '$full',
        padding: '$2',
        display: 'flex',
        alignItems: 'center',
        color: '$blue',
        cursor: 'pointer',

        '&:hover': {
            opacity: .8
        }
    }
});

export const SlideNavigation = styled('section', {
    position: 'absolute',
    bottom: '50%',
    transform: 'translateY(50%)',
    left: 0,
    zIndex: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

    '.prev': {
        position: 'absolute',
        left: '-4rem'
    },

    '.next': {
        position: 'absolute',
        right: '-4rem'
    },

    '.swiper-button': {
        background: '$blue',
        borderRadius: '$full',
        padding: '$2',
        display: 'flex',
        alignItems: 'center',
        color: '$white',
        cursor: 'pointer',

        '&:hover': {
            opacity: .8
        }
    }
});

export const ContainerCentralBanner = styled(Container, {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$4'
});

export const ContainerCollectionBanner = styled(Container, {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$3'
});

export const HomeProductContainer = styled(Container, {
    display: 'flex',
    flexDirection: 'column',
    gap: '$8',
    padding: '3rem 0',
    position: 'relative',

    '.dots': {
        position: 'absolute',
        zIndex: 2,
        top: '4rem !important',
        right: 0,
        left: 'unset !important',
        height: 'fit-content',
        width: 'fit-content !important',

        '.swiper-pagination-bullet': {
            width: '.75rem',
            height: '.75rem',
            background: '$gray800'
        },

        '.swiper-pagination-bullet-active': {
            background: '$blue'
        }
    },

    '> h2': {
        color: '$blue',
        fontSize: '1.875rem',
        fontWeight: '$bold',
        textTransform: 'uppercase',
        position: 'relative',

        '&::after': {
            content: '',
            position: 'absolute',
            background: '$blue',
            width: '5.75rem',
            height: '0.3125rem',
            left: 0,
            bottom: '-.5rem',
            borderRadius: '$basic'
        }
    },

    section: {
        width: '100%',

        '.swiper.swiper-initialized': {
            padding: '$2 0'
        }
    }
});
