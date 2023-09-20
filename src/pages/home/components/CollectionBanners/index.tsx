import { NextImage } from '@/interfaces/NextImage';
import { CollectionBannersWrapper } from './styles';
import Image from 'next/image';
import Link from 'next/link';

interface CollectionBannerProps {
    name: string,
    link: string,
    banner: NextImage
}

export function CollectionBanners({ name, link, banner }: CollectionBannerProps) {
    return (
        <CollectionBannersWrapper>
            <Link href={link}>
                <Image src={banner.src} alt={name} width={banner.width} height={banner.height}/>
            </Link>
        </CollectionBannersWrapper>
    )
}