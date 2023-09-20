import { Container } from '@/styles/global';
import { styled } from '../../../../../stitches.config';

export const InfoBarContainer = styled(Container, {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '$10 0',
    position: 'relative',

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