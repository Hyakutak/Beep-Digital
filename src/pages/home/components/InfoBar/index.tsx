import Image from 'next/image';
import { InfoBarContainer } from './styles';
import ShippingIcon from '@/assets/info-bar/shipping.svg';
import PadLockIcon from '@/assets/info-bar/padlock.svg';
import FastDelivery from '@/assets/info-bar/fast-delivery.svg';
import CreditCardIcon from '@/assets/info-bar/credit-card.svg';

export function InfoBar() {
    return (
        <InfoBarContainer>
            <section>
                <Image src={ShippingIcon} alt='Shipping' />
                <span>ENTREGAS PARA TODO O BRASIL</span>
            </section>
            <section>
                <Image src={PadLockIcon} alt='Padlock' />
                <span>SITE 100% SEGURO</span>
            </section>
            <section>
                <Image src={FastDelivery} alt='Fast Delivery' />
                <span>FRETE GRÁTIS EM COMPRAS A PARTIR DE R$ 100,00</span>
            </section>
            <section>
                <Image src={CreditCardIcon} alt='Credit Card' />
                <span>PARCELAS EM ATé 12x sem juros</span>
            </section>
        </InfoBarContainer>
    )
}