import { Container } from '@/styles/global';
import { styled } from '../../../../stitches.config';

export const FooterContainer = styled('footer', {
    display: 'flex',
    flexDirection: 'column'
});

export const FooterWrapper = styled(Container, {
    marginTop: '3.31rem',
    marginBottom: '2.41rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '5.69rem',
    
    '> section': {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',

        '&:last-child': {
            '&::before': {
                content: '',
                width: '100%',
                height: '0.0625rem',
                background: '$grayF',
                position: 'absolute',
                top: '-2.845rem'
            },

            '> div': {
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                gap: '$5',
            }
        },

        '> div': {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            gap: '$13',
    
            h4: {
                color: '$gray800',
                fontSize: '$smd',
                fontWeight: '$bold',
                textTransform: 'uppercase'
            },
    
            ul: {
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '.62rem',
    
                li: {
                    fontSize: '$ssm',
                    textTransform: 'uppercase',
    
                    a: {
                        textDecoration: 'none',
                        color: '$gray700',
                        
    
                        '&:hover': {
                            color: '$blue'
                        }
                    }
                }
            }
        }
    }
});

export const FooterContactUs = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '$13',

    h4: {
        color: '$gray800',
        fontSize: '$smd',
        fontWeight: '$bold',
        textTransform: 'uppercase'
    },

    ul: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '.62rem',

        li: {
            fontSize: '$ssm',
            textTransform: 'uppercase',

            '&:nth-child(3)': {
                marginBottom: '$4',
            },

            '&:nth-child(4)': {
                marginTop: '$4',
                position: 'relative',

                '&::before': {
                    content: '',
                    position: 'absolute',
                    width: '100%',
                    background: '$gray700',
                    height: '0.0625rem',
                    left: 0,
                    top: '-1.25rem'
                }
            },

            a: {
                textDecoration: 'none',
                color: '$gray700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '$11',

                svg: {
                    color: '$blue'
                },
                            

                '&:hover': {
                    color: '$blue'
                }
            }
        }
    }
});

export const FooterMoreBeEnxoval = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left !important',
    gap: '$8 !important',
    maxWidth: '23rem',

    span: {
        color: '$gray700',
        fontSize: '$ssm'
    },

    button: {
        all: 'unset',
        background: '$blue',
        maxWidth: '10rem',
        borderRadius: '$basic',
        padding: '$3 $3',
        textAlign: 'center',
        color: '$white',
        fontWeight: '$bold',
        textTransform: 'uppercase',
        border: '1px solid $gray700',
        cursor: 'pointer',

        '&:hover': {
            background: '$orange',
            color: '$blue'
        }
    }
});

export const SubFooterWrapper = styled('article', {
    background: '$gray200'
});

export const SubFooterContainer = styled(Container, {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    span: {
        color: '$gray600',
        fontSize: '$xxs'
    },

    div: {
        display: 'flex',
        alignItems: 'center',
        gap: '$10'
    }
});