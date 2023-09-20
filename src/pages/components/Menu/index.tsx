import Link from 'next/link';
import { NavContainer, NavWrapper } from './styles';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

import IconCobertor from '@/assets/icons-menu/cobertor.svg';
import IconLencol from '@/assets/icons-menu/lencol.svg';
import IconPano from '@/assets/icons-menu/pano.svg';
import IconRoupao from '@/assets/icons-menu/roupao.svg';
import IconTapete from '@/assets/icons-menu/tapete.svg';
import IconToalhadeMesa from '@/assets/icons-menu/toalha-de-mesa.svg';
import IconToalha from '@/assets/icons-menu/toalha.svg';

interface Category {
    id: string,
    image?: string,
    name: string,
    link: string
}

export function Menu() {
    const arrayCategory: Category[] = [
        {
            id: uuidv4(),
            image: IconToalha,
            name: 'Toalhas',
            link: '#'
        },
        {
            id: uuidv4(),
            image: IconRoupao,
            name: 'Roupão',
            link: '#'
        },
        {
            id: uuidv4(),
            image: IconTapete,
            name: 'Tapetes',
            link: '#'
        },
        {
            id: uuidv4(),
            image: IconCobertor,
            name: 'Edredom',
            link: '#'
        },
        {
            id: uuidv4(),
            image: IconLencol,
            name: 'Lençol',
            link: '#'
        },
        {
            id: uuidv4(),
            image: IconPano,
            name: 'Pano',
            link: '#'
        },
        {
            id: uuidv4(),
            image: IconToalhadeMesa,
            name: 'Toalha de Mesa',
            link: '#'
        },
        {
            id: uuidv4(),
            name: 'Mega Promoções',
            link: '#'
        }
    ];

    const listCategory = arrayCategory.map(({ id, image, name, link }) => (
        <li key={id}>
            {image && <Image src={image} alt={name} />}
            <Link href={link}>{ name }</Link>
        </li>
    ));

    return (
        <NavWrapper>
            <NavContainer>
                <ul>
                    { listCategory }
                </ul>
            </NavContainer>
        </NavWrapper> 
    )
}