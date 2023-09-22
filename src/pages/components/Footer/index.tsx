import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { PaymentList } from './components/PaymentList';
import { Clock, Envelope, Phone, WhatsappLogo } from 'phosphor-react';
import { NewsLetter } from './components/NewsLetter';
import { FooterContactUs, FooterContainer, FooterMoreBeEnxoval, FooterWrapper, SubFooterContainer, SubFooterWrapper } from './styles';

import LogoBeepDigital from '@/assets/icons-footer/logo-beep.svg';
import LogoLojaIntegrada from '@/assets/icons-footer/logo-loja-integrada.svg';
import LogoBeEnxoval from '@/assets/logo/logo.png';

import securitySeal from '@/assets/selos/security.svg';
import shippingSeal from '@/assets/selos/shipping.svg';

export function Footer() {
    const LinksCategories = [
        {
            id: uuidv4(),
            name: 'Roupas',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'CAMISETAS',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'CALÇAS JEANS',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'TOCAS',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'BLUSAS',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'SHORTS',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'CONJUNTOS',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'MOLETONS',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'NOSSAS MARCAS',
            link: '#',
        }
    ];

    const LinksAboutUs = [
        {
            id: uuidv4(),
            name: 'Fale conosco',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'Sobre este tema',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'Politica de trocas',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'Formas de envio',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'FORMAS DE PAGAMENTO',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'SEGURANÇA E PRIVACIDADE',
            link: '#',
        }
    ];

    const LinksContact = [
        {
            id: uuidv4(),
            icon: <Phone size={16} weight="fill" />,
            name: 'TELEFONE: (11) 9999 0000',
            link: '#',
        },
        {
            id: uuidv4(),
            icon: <WhatsappLogo size={16} weight="fill" />,
            name: 'WHATSAPP: (11) 9999 0000',
            link: '#',
        },
        {
            id: uuidv4(),
            icon: <Envelope size={16} weight="fill" />,
            name: 'LOREMIPSUM@HOTMAIL.COM',
            link: '#',
        },
        {
            id: uuidv4(),
            icon: <Clock size={16} weight="fill" />,
            name: 'SEG A SEX DAS 7H AS 22H',
            link: '#',
        }
    ];

    const pagesCategories = LinksCategories.map(({id, name, link}) => (
        <li key={id}>
            <Link href={link}>{name}</Link>
        </li>
    ));

    const pagesAboutUs = LinksAboutUs.map(({id, name, link}) => (
        <li key={id}>
            <Link href={link}>{name}</Link>
        </li>
    ));

    const redesSociais = LinksContact.map(({id, icon, link, name}) => (
        <li key={id}>
            <Link href={link}>{icon}{name}</Link>
        </li>
    ));

    return (
        <FooterContainer>
            <NewsLetter />
            <FooterWrapper>
                <section>
                    <FooterMoreBeEnxoval>
                        <Image src={LogoBeEnxoval} alt='Logo Be Enxoval' width={190} />
                        <span>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        </span>
                        <button>SAIBA MAIS</button>
                    </FooterMoreBeEnxoval>
                    <div>
                        <h4>CATEGORIAS</h4>
                        <nav>
                            <ul>{ pagesCategories }</ul>
                        </nav>
                    </div>
                    <div>
                        <h4>Sobre nós</h4>
                        <nav>
                            <ul>{ pagesAboutUs }</ul>
                        </nav>
                    </div>
                    <FooterContactUs>
                        <h4>CONTATO</h4>
                        <nav>
                            <ul>{ redesSociais }</ul>
                        </nav>
                    </FooterContactUs>
                </section>
                <section>
                    <div>
                        <h4>PAGUE COM</h4>
                        <PaymentList />
                    </div>
                    <div>
                        <h4>SELOS</h4>
                        <Image src={securitySeal} alt='Selos de seguranca' />
                    </div>
                    <div>
                        <h4>Formas de envio</h4>
                        <Image src={shippingSeal} alt='Selos de entrega' />
                    </div>
                </section>
            </FooterWrapper>
            <SubFooterWrapper>
                <SubFooterContainer>
                    <span>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                    </span>
                    <div>
                        <Image src={LogoBeepDigital} alt='Logo Beeb Digital' />
                        <Image src={LogoLojaIntegrada} alt='Logo Loja Integrada' />
                    </div>
                </SubFooterContainer>
            </SubFooterWrapper>
        </FooterContainer>
    )
}