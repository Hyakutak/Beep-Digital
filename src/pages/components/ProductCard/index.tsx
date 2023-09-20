import { useState } from 'react';
import { Product } from '@/interfaces/Product';
import { ActionQuantidy, ActionsContainer, ContainerPrice, ProductCardContainer, PromotionValue, WishlistCard } from './styles';
import Image from 'next/image';
import { CaretDown, CaretUp, Heart } from 'phosphor-react';

export function ProductCard({ name, imageUrl, price, oldPrice }: Product) {
    const [itemAmount, setItemAmount] = useState<number>(1);

    function inclementAmount() {
        setItemAmount((itemAmount) => ++itemAmount)
    }

    function declementAmount() {
        if(itemAmount <= 1) {
            return itemAmount;
        }
        setItemAmount((itemAmount) => --itemAmount)
    }
    
    return (
        <ProductCardContainer>
            <header>
                <Image src={imageUrl} layout="responsive" width={338} height={530} alt={name} quality={100}/>
                { oldPrice && <PromotionValue>25% off</PromotionValue> }
                <WishlistCard className='hover-wishlist'>
                    <Heart size={20} weight="fill" />
                </WishlistCard>
            </header>
            <footer>
                <h2>{ name }</h2>
                <ContainerPrice>
                    <s>{ oldPrice }</s>
                    <span>{ price }</span>
                </ContainerPrice>
                <p>Em até <strong>12x</strong> sem juros no <strong>cartão</strong></p>
                <p>Ou por <strong>R$ 10,00</strong> a vista no boleto</p>
                <ActionsContainer className='action-container-buttons'>
                    <ActionQuantidy>
                        <CaretUp size={7} weight="fill" onClick={inclementAmount} className='arrow-up' />
                        <input value={itemAmount} onChange={(event) => setItemAmount(Number(event.target.value))} min="1" name="quantity" type="number" />
                        <CaretDown size={7} weight="fill" onClick={declementAmount} className='arrow-down' />
                    </ActionQuantidy>
                    <button>
                        Adicionar
                    </button>
                </ActionsContainer>
            </footer>
        </ProductCardContainer>
    )
}