import { Container } from '@/styles/global';
import { styled } from '../../../../../stitches.config';

export const VideoContainer = styled(Container, {
    paddingTop: '37%', 
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '$basic',
  
    '> img':{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
});

export const PlayVideoIcon = styled('section', {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer'   
});