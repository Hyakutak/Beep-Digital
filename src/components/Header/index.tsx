import Image from 'next/image';
import Link from 'next/link';
import logoShop from '../../assets/Logo.svg';
import { HeaderContainer } from './styles';
import { Cart } from '../Cart';

export function Header() {
    return (
        <HeaderContainer>
            <Link href='/'>
                <Image src={logoShop} alt="" />
            </Link>
            <Cart />
        </HeaderContainer>
    );
}