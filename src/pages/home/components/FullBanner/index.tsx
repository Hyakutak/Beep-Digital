import { NextImage } from '@/interfaces/NextImage';
import { isMobile } from '@/utils/isMobile';
import Image from 'next/image';
import Link from 'next/link';
import { FullBannerContainer } from './styles';

interface FullBannerProps {
    name: string,
    link: string,
    bannerDesktop: NextImage,
    bannerMobile: NextImage
}

export function FullBanner({ name, link, bannerDesktop, bannerMobile }: FullBannerProps) {
    const isOnMobile = isMobile();
    return (
        <FullBannerContainer>
            <Link href={link}>
                {isOnMobile ? (
                    <Image src={bannerMobile} alt={name} width={bannerMobile.width} height={bannerMobile.height} />
                    ) : (
                        <Image src={bannerDesktop} alt={name} width={bannerDesktop.width} height={bannerDesktop.height} />
                    )
                }
            </Link>
        </FullBannerContainer>
    )
}