import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderContainer, HeaderCountCartItems, HeaderHamburguer, HeaderIcons, HeaderInput, HeaderWrapper } from './styles';
import logoImage from '@/assets/logo/logo.png';
import { MagnifyingGlass, User, Phone, ShoppingCart, X, List } from 'phosphor-react';
import { Menu } from '../Menu';


export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderHamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? 
                        <X className='close' size={24} weight="bold" />
                        :
                        <List size={24} weight="bold" />
                    }
                </HeaderHamburguer>
                <div className={`${isMenuOpen ? 'active' : 'no-active'}`}>
                    <Menu />
                </div>
                <Image src={logoImage} alt='Logo' width={175} height={60}/>
                <HeaderInput>
                    <input className={`${isSearchOpen ? 'active' : ''}`} type="search" name="search" id="search" placeholder="Digite aqui o que você procura…" />
                    <MagnifyingGlass size={23} weight="light" onClick={() => setIsSearchOpen (!isSearchOpen )} />
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