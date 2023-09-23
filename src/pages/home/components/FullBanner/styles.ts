import { styled } from '../../../../../stitches.config';

export const FullBannerContainer = styled('section',{
    paddingTop: '30%', 
    position: 'relative',
    overflow: 'hidden',

    '@tablet': {
        paddingTop: '50%',
    },

    '@mobileL': {
        paddingTop: '85%',
    },
  
    img:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
});