import Image from 'next/image';
import { PlayVideoIcon, VideoContainer } from './styles';
import { NextImage } from '@/interfaces/NextImage';
import PlayVideo from '@/assets/video/youtube.svg';

interface VideoProps {
    video: NextImage
}

export function VideoBanner({ video }: VideoProps) {
    return (
        <VideoContainer>
            <Image src={video.src} alt='Video' width={video.width} height={video.height} />
            <PlayVideoIcon>
                <Image src={PlayVideo} alt='Play Video' width={95} height={65} />
            </PlayVideoIcon>
        </VideoContainer>
    )
}