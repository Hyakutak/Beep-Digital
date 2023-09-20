import { styled } from '../../../../stitches.config';

export const TopBarContainer = styled('section',{
    backgroundColor: '$blue',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '$2 0',
    gap: '$3',

    p: {
        color: '$white',
        fontSize: '$sm',
        fontWeight: '$regular',
        textTransform: 'uppercase',
        span: {
            fontWeight: '$bold'
        }
    }
});