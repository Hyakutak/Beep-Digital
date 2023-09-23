import { Container } from '@/styles/global';
import { styled } from '../../../../../stitches.config';

export const InfoBarContainer = styled(Container, {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '$10 0',
    position: 'relative',

    '@tablet': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '$4',
        padding: '$3 0',
        
        '> section': {
            justifyContent: 'center',
            '&::after': {
                display: 'none'
            }
        }
    },

    '@mobileL': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    section: {
        display: 'flex',
        alignItems: 'center',
        gap: '$2',
        position: 'relative',

        span: {
            fontSize: '$sm',
            fontWeight: '$medium',
            textTransform: 'uppercase'
        },

        '&::after': {
            content: '•',
            position: 'absolute',
            right: '-1.5rem',
            top: '45%',
            transform: 'translateY(-53%)',
            fontSize: '$2xxl',
            color: '$blue'
        },

        '&:last-child': {
            '&::after': {
                content: ''
            }
        }
    }
});