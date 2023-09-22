import { styled, globalCss } from '../../stitches.config';

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        backgroundColor: '$white',
        color: '$gray800',
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: '$default',
        fontWeight: '$regular',
    },

    '@tablet': {
        html:{
            fontSize: '87.5%',
        }
    }
});

export const Container = styled('section', {
    width: 1220,
    margin: '0 auto',
    maxWidth: '100%'
});