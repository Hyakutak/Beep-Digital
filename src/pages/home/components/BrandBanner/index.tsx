import { NextImage } from '@/interfaces/NextImage';
import { BrandItem } from './styles';
import Link from 'next/link';
import Image from 'next/image';

interface BrandProps {
    name: string,
    link: string,
    banner: NextImage
}

export function BrandBanner({ name, link, banner }: BrandProps) {
    return (
        <Link href={link}>
            <BrandItem>
                <Image src={banner.src} alt={name} width={banner.width} height={banner.height} />
            </BrandItem>
        </Link>
    )
}