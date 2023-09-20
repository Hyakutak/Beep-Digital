import { NextImage } from '@/interfaces/NextImage';
import Image from 'next/image';
import Link from 'next/link';
import { CentralBannerImage, CentralBannerText } from './styles';

interface CentralBannerProps {
    name: string,
    link: string,
    banner: NextImage
}

export function CentralBanner({ name, link, banner}: CentralBannerProps) {
    return (
        <Link href={link}>
            <CentralBannerImage>
                <Image src={banner.src} alt={name} width={banner.width} height={banner.height} />
                <CentralBannerText>
                    <h3>{ name }</h3>
                    <span>Confira</span>
                </CentralBannerText>
            </CentralBannerImage>
        </Link>
    )
}