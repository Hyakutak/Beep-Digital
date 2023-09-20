export function isMobile(): boolean {
    if (typeof window === 'undefined') {
        // Verifica se estamos no lado do servidor (SSR)
        return false;
    }

    const mobileScreenWidth = 768;
  
    return window.innerWidth < mobileScreenWidth;
}