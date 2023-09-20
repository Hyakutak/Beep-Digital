import { NextImage } from '@/interfaces/NextImage';
import { ReviewContainer, ReviewImageContainer } from './styles';
import Image from 'next/image';
import { Star } from 'phosphor-react';

interface ReviewProps {
    name: string,
    review: string,
    star: number,
    banner: NextImage
}

export function ReviewStore({ name, review, star, banner }: ReviewProps) {
    const ratings = [...Array(5)].map(( _, index) => (
        <Star size={16} weight={`${index < star ? 'fill' : 'regular'}`} />
    ));

    return (
        <ReviewContainer>
            <header>
                <ReviewImageContainer>
                    <Image src={banner.src} alt={name} width={banner.width} height={banner.height} />
                </ReviewImageContainer>
                <div>
                    <h5>{ name }</h5>
                    <span>{ ratings }</span>
                </div>
            </header>
            <footer>
                <span>{ review }</span>
            </footer>
        </ReviewContainer>
    )
}