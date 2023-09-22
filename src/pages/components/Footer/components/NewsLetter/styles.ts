import { Container } from '@/styles/global';
import { styled } from '../../../../../../stitches.config';

export const NewsletterWrapper = styled('section', {
    boxShadow: '0px 3px 7.5px 0px rgba(0, 0, 0, 0.10)',
    zIndex: 2,
    position: 'relative'
});

export const NewsletterContainer = styled(Container, {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '$5 0',
   

    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '$5',

        h4: {
            fontSize: '$2xxll',
            fontWeight: '$bold',
            color: '$blue',
            textTransform: 'uppercase',
            lineHeight: '$regular'
        },

        span: {
            fontSize: '$xl',
            color: '$blue',
            textTransform: 'uppercase',
            lineHeight: '$regular'
        }
    },

    footer: {
        display: 'flex',
        gap: '$4',

        input: {
            all: 'unset',
            width: '26rem',
            borderRadius: '$basic',
            background: '$gray200',
            padding: '$5',
            fontSize: '$sm',
            fontWeight: '$medium',
            color: '$gray',

            '&::placeholder': {
                fontSize: '$sm',
                fontWeight: '$medium',
                color: '$gray',
                textTransform: 'uppercaase'
            }
        },

        button: {
            all: 'unset',
            background: '$blue',
            borderRadius: '$basic',
            color: '$white',
            textTransform: 'uppercase',
            fontWeight: '$bold',
            padding: '$5 $10',
            transition: 'all 0.5s ease-out',
            cursor: 'pointer',

            '&:hover': {
                background: '$orange',
                color: '$blue'
            }
        }
    }
});