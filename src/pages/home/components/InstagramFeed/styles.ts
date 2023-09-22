import { styled } from '../../../../../stitches.config';

export const FeedInstagramBanner = styled('section', {
    position: 'relative',
    paddingTop: '100%',
    display: 'block',
    width: '100%',

    img: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '$basic',
    }
});