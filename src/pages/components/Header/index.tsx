import Image from 'next/image';
import { HeaderContainer, HeaderCountCartItems, HeaderIcons, HeaderInput, HeaderWrapper } from './styles';
import logoImage from '@/assets/logo/logo.png';
import { MagnifyingGlass, User, Phone, ShoppingCart } from 'phosphor-react';
import Link from 'next/link';

export function Header() {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Image src={logoImage} alt='Logo' width={175} height={60}/>
                <HeaderInput>
                    <input type="search" name="search" id="search" placeholder="Digite aqui o que você procura…" />
                    <MagnifyingGlass size={23} weight="light" />
                </HeaderInput>
                <HeaderIcons>
                    <Link href="/" >
                        <User size={20} weight="fill" />
                        <div>
                            <span>Entre</span> ou cadastre-se
                        </div>
                    </Link>
                    <Link href="/" >
                        <Phone size={20} weight="fill" />
                        <div>
                            <span>CONTATO</span> (11)987937983
                        </div>
                    </Link>
                    <Link href="/" >
                        <aside>
                            <ShoppingCart size={20} />
                            <HeaderCountCartItems>0</HeaderCountCartItems>
                        </aside>
                        <div>
                            <span>MEU CARRINHO</span> R$ 000,00
                        </div>
                    </Link>
                </HeaderIcons>
            </HeaderContainer>
        </HeaderWrapper>
    )
}