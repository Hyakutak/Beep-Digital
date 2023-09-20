import { styled } from '@stitches/react';

export const CollectionBannersWrapper = styled('section', {
    display: 'flex',
    position: 'relative',

    a: {
        position: 'relative',
        paddingTop: '50%',
        display: 'block',
        width: '100%',

        img: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            objectFit: 'contain'
        }
    }
});