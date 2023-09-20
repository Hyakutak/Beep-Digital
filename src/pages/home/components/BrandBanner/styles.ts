import { styled } from '../../../../../stitches.config';


export const BrandItem = styled('div', {
    paddingTop: '50%', 
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '$basic',
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.14)',

  
    img:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        padding: '$3 $6'
    }
});