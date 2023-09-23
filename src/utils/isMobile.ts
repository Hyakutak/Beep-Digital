import { useMediaQuery } from 'react-responsive';

export function isMobile(): boolean {
    const mobileScreenWidth = useMediaQuery({ maxWidth: 767 });
  
    return mobileScreenWidth;
}