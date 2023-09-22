import Image from 'next/image';
import { NewsletterContainer, NewsletterWrapper } from './styles';
import NewsletterIcon from '@/assets/icons-footer/newsletter.svg';

export function NewsLetter() {
    return (
        <NewsletterWrapper>
            <NewsletterContainer>
                <header>
                    <Image src={NewsletterIcon} alt='Newsletter' />
                    <div>
                        <h4>ASSINE NOSSA NEWSLETTER</h4>
                        <span>E RECEBA NOSSAS PROMOÇões</span>
                    </div>
                </header>
                <footer>
                    <input type="text" placeholder='DIGITE SEU E-MAIL' />
                    <button>Enviar</button>
                </footer>
            </NewsletterContainer>
        </NewsletterWrapper>
    )
}