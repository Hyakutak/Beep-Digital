import Image from 'next/image';
import { TopBarContainer } from './styles';
import logoPix from '@/assets/selos/pix.svg';

export function TopBar() {
    return (
        <TopBarContainer>
            <p>Aceitamos <span>Pagamentos</span> com</p>
            <Image src={logoPix} alt='Logo Pix' width={81} height={28}/>
        </TopBarContainer>
    )
}