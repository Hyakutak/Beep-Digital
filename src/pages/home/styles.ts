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
        left: '-4rem',

        '@tablet': {
            left: '0'
        }
    },

    '.next': {
        position: 'absolute',
        right: '-4rem',

        '@tablet': {
            right: '0'
        }
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
    gap: '$4',

    '@mobileL': {
        display: 'flex',
        flexDirection: 'column'
    }
});

export const ContainerCollectionBanner = styled(Container, {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$3',

    '@mobileL': {
        display: 'flex',
        flexDirection: 'column'
    }
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

        '@tablet': {
            top: '5rem !important',
        },

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
        fontSize: '$2xxll',
        fontWeight: '$bold',
        textTransform: 'uppercase',
        position: 'relative',

        '@tablet': {
            fontSize: '$2xl'
        },

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

export const InstagramFeedContainer = styled(Container, {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',

    '@tablet': {
        padding: '$2'
    },

    header: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '$5',
        

        h2: {
            color: '$blue',
            fontSize: '$2xll',
            fontWeight: '$regular',
            textTransform: 'uppercase',
            position: 'relative',

            '@tablet': {
                fontSize: '$2xl',
            },

            span: {
                fontWeight: '$bold'
            },

            '&::after': {
                content: '',
                height: '0.3125rem',
                width: '5.75rem',
                background: '$blue',
                borderRadius: '$basic',
                position: 'absolute',
                left: 0,
                bottom: '-.5rem'
            }
        },

        svg: {
            background: '$blue',
            color: '$white',
            borderRadius: '$full',
            padding: '$3',
            width: '3.9375rem',
            height: '3.9375rem',

            '@tablet': {
                width: '3.5rem',
                height: '3.25rem'
            }
        }
    }
});
