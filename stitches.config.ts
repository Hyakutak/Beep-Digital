import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
    theme: {
        fonts: {
            default: 'Montserrat, sans-serif'
        },

        space: {
            px: '1px',
            1: '0.25rem',
            2: '0.5rem',
            3: '0.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            10: '2.5rem',
            11: '0.625rem',
            12: '1.875rem'
        },

        fontSizes: {
            xxs: '.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '2xll': '2rem',
            '2xxl': '2.5rem',
        },

        fontWeights: {
            regular: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
            extraBold: '800',
            black: '900'
        },

        lineHeights: {
            base: '160%',
        },

        colors: {
            white: '#FFF',
            whiteA: '#F0F0F0',

            blue: '#0053A9',

            gray: '#ADADAD',
            grayB: '#B7B7B7',
            gray200: '#F2F2F2',
            gray600: '#626262',
            gray700: '#707070',
            gray800: '#828282',
            gray900: '#E9E9E9',

            black: '#000',
            black200: '#3A3A3A',
            black300: '#3B3B3B',
            blackB: '#B2B2B2',
            black700: '#777',
            blackC: '#0C0C0C',

            green: '#32B864',
            orange: '#FFBA00'
        },

        radii: {
            small: '.25rem',
            basic: '0.625rem',
            full: '99999px',
        }, 
    },
    media: {
        mobile: '(max-width: 520px)',
        mobileL: '(max-width: 768px)',
        tablet: '(max-width: 1024px)',
    }
});