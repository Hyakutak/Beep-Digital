import { NextImage } from '@/interfaces/NextImage';
import { FeedInstagramBanner } from './styles';
import Image from 'next/image';

interface InstagramProps {
    name: string,
    banner: NextImage
}

export function InstagramFeed({ name, banner }: InstagramProps) {
    return (
        <FeedInstagramBanner>
            <Image src={banner.src} alt={name} width={banner.width} height={banner.height} />
        </FeedInstagramBanner>
    )
}