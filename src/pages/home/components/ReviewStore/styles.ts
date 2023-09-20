import { styled } from '../../../../../stitches.config';

export const ReviewContainer = styled('section', {
    borderRadius: '$basic',
    boxShadow: '0px 1px 15px 0px rgba(0, 0, 0, 0.14)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2.16rem',
    padding: '$4',
    position: 'relative',
    height: '16.25rem',


    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '$4',

        '&::after': {
            content: '',
            height: '0.0625rem',
            width: '22.36619rem',
            position: 'absolute',
            background: '$blackB',
            top: '50%',
            transform: 'translateY(-50%)'
        },

        div: {
            display: 'flex',
            flexDirection: 'column',
            gap: '.15rem',

            h5: {
                color: '$gray800',
                fontSize: '$2xl',
                fontWeight: '$bold',
                letterSpacing: '-0.075rem',
                textTransform: 'uppercase'
            },

            span: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '6.97631rem',
                svg: {
                    color: '#FFBA00'
                }
            }

        }
    },

    footer: {
        maxWidth: '17.96931rem',
        span: {
            fontSize: '$sm',
            color: '$black300',
            letterSpacing: '-0.04375rem'
        }
    }
});

export const ReviewImageContainer = styled('section', {
    position: 'relative',
    paddingTop: '40%',
    width: '5.87881rem !important',
    display: 'block',

    img: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        objectFit: 'contain',
    }
});