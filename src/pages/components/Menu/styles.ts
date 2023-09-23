import { Container } from '@/styles/global';
import { styled } from '../../../../stitches.config';
import flagBackground from '@/assets/arrows/flag.jpg';

export const NavContainer = styled(Container, {
    display: 'flex',
    alignItems: 'center',
    gap: '$7'
});

export const NavWrapper = styled('nav', {
    padding: '$5 0',
    boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.13)',

    ul: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        listStyle: 'none',
        
        li: {
            display: 'flex',
            alignItems: 'center',
            gap: '$2',

            a: {
                all: 'unset',
                fontSize: '$sm',
                color: '$gray800',
                textTransform: 'uppercase',
                lineHeight: '$base',
                cursor: 'pointer',

                '&:hover': {
                    color: '$blue'
                }
            },

            '&:last-child': {
                padding: '$1 $3',
                position: 'relative',
                backgroundImage: `url(${flagBackground.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',

                a: {
                    color: '$white',
                    fontWeight: '$bold',
                    display: 'flex',
                    gap: '$1',
                    
                    '&::before': {
                        content: '•',
                        fontSize: '1rem'
                    }
                },
            }
        }
    },

    '@tablet': {
        position: 'fixed',
        visibility: 'hidden'
    }, 
});