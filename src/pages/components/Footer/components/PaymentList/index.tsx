import visaIcon from '@/assets/payment-icons/visa.svg';
import masterIcon from '@/assets/payment-icons/master.svg';
import dinnenrIcon from '@/assets/payment-icons/dinner.svg';
import americanIcon from '@/assets/payment-icons/american.svg';
import eloIcon from '@/assets/payment-icons/elo.svg';
import paypalIcon from '@/assets/payment-icons/paypal.svg';
import pagseguroIcon from '@/assets/payment-icons/pagseguro.svg';
import { PaymentListContainer } from './styles';
import Image from 'next/image';

export function PaymentList() {
    return (
        <PaymentListContainer>
            <Image src={visaIcon} alt='Visa' />
            <Image src={masterIcon} alt='Master' />
            <Image src={dinnenrIcon} alt='Dinner' />
            <Image src={americanIcon} alt='American' />
            <Image src={eloIcon} alt='Elo' />
            <Image src={paypalIcon} alt='PayPal' />
            <Image src={pagseguroIcon} alt='Pag Seguro' />
        </PaymentListContainer>
    )
}