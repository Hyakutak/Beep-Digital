import { styled } from '../../../../../stitches.config';

export const CentralBannerImage = styled('section', {
    paddingTop: '72%',
    position: 'relative',
    width: '100%',
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
        width: 'fit-content',

        '&:hover': {
            background: '$orange'
        }
    }
});