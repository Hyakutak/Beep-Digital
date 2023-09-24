import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CaretLeft, CaretRight, InstagramLogo } from 'phosphor-react';
import { FullBanner } from './components/FullBanner';
import {
    ContainerCentralBanner, 
    ContainerCollectionBanner, 
    FullBannerContainer, 
    HomeProductContainer, 
    InstagramFeedContainer, 
    SlideNavigation, 
    SlideProductNavigation } from './styles';
import { InfoBar } from './components/InfoBar';
import { CentralBanner } from './components/CentralBanner';
import { Product } from '@/interfaces/Product';
import { ProductCard } from '../components/ProductCard';
import { CollectionBanners } from './components/CollectionBanners';
import { BrandBanner } from './components/BrandBanner';
import { VideoBanner } from './components/Video';
import { ReviewStore } from './components/ReviewStore';
import { InstagramFeed } from './components/InstagramFeed';

import 'swiper/css';
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';

import FullBannerPrincipal from '@/assets/full-banners/desktop/fbprincipal.jpg';
import FullBanner1 from '@/assets/full-banners/desktop/fbanner01.jpg';
import FullBanner2 from '@/assets/full-banners/desktop/fbanner02.jpg';
import FullBanner3 from '@/assets/full-banners/desktop/fbanner03.jpg';

import FullBannerPrincipalMobile from '@/assets/full-banners/mobile/fbmprincipal.jpg';
import FullBannerMobile1 from '@/assets/full-banners/mobile/fbmobile01.jpg';
import FullBannerMobile2 from '@/assets/full-banners/mobile/fbmobile03.jpg';
import FullBannerMobile3 from '@/assets/full-banners/mobile/fbmobile03.jpg';

import CentralBanner1 from '@/assets/central-banners/jogo-de-cama.png';
import CentralBanner2 from '@/assets/central-banners/toalha-de-mesa.jpg';
import CentralBanner3 from '@/assets/central-banners/jogo-de-cama-2.jpg';

import CollectionBanner1 from '@/assets/collection-banners/banner-1.jpg';
import CollectionBanner2 from '@/assets/collection-banners/banner-2.jpg';
import CollectionBanner3 from '@/assets/collection-banners/banner-3.jpg';

import BrandChannel from '@/assets/brands/channel.png';
import BrandWhite from '@/assets/brands/white.png';
import BrandNike from '@/assets/brands/nike.png';
import BrandAdidas from '@/assets/brands/adidas.png';
import BrandPuma from '@/assets/brands/puma.png';
import BrandCalvin from '@/assets/brands/calvin.png';

import CoverVideo from '@/assets/video/video.jpg';

import Review1 from '@/assets/review/review1.jpg';
import Review2 from '@/assets/review/review2.jpg';
import Review3 from '@/assets/review/review3.jpg';

import Instagram1 from '@/assets/instagram/instagram-1.jpg';
import Instagram2 from '@/assets/instagram/instagram-2.jpg';
import Instagram3 from '@/assets/instagram/instagram-3.jpg';
import Instagram4 from '@/assets/instagram/instagram-4.jpg';
import Instagram5 from '@/assets/instagram/instagram-5.png';
import { isMobile } from '@/utils/isMobile';

export interface HomeProps {
    products: Product[];
}

register();

export default function Home({ products }: HomeProps) {
    const isOnMobile = isMobile();

    const fullBannerProps = [
        {
            id: uuidv4(),
            name: 'Principal',
            link: '#',
            bannerDesktop: FullBannerPrincipal,
            bannerMobile: FullBannerPrincipalMobile
        },
        {
            id: uuidv4(),
            name: 'Novos Jogos de Cama',
            link: '#',
            bannerDesktop: FullBanner1,
            bannerMobile: FullBannerMobile1
        },
        {
            id: uuidv4(),
            name: 'Novos Panos de Prato',
            link: '#',
            bannerDesktop: FullBanner2,
            bannerMobile: FullBannerMobile2
        },
        {
            id: uuidv4(),
            name: 'Novas Toalhas',
            link: '#',
            bannerDesktop: FullBanner3,
            bannerMobile: FullBannerMobile3
        }
    ];

    const CentralBannerProps = [
        {
            id: uuidv4(),
            name: 'Jogo de Cama',
            link: '#',
            banner  : CentralBanner1
        },
        {
            id: uuidv4(),
            name: 'Toalha de Mesa',
            link: '#',
            banner: CentralBanner2
        },
        {
            id: uuidv4(),
            name: 'Jogo de Cama',
            link: '#',
            banner: CentralBanner3
        }
    ];

    const CollectionBannerProps = [
        {
            id: uuidv4(),
            name: 'Tapetes',
            link: '#',
            banner  : CollectionBanner1
        },
        {
            id: uuidv4(),
            name: 'Roupão',
            link: '#',
            banner: CollectionBanner2
        },
        {
            id: uuidv4(),
            name: 'Toalha mesa',
            link: '#',
            banner: CollectionBanner3
        }
    ];

    const BrandsProps = [
        {
            id: uuidv4(),
            name: 'Channel',
            link: '#',
            banner  : BrandChannel
        },
        {
            id: uuidv4(),
            name: 'White',
            link: '#',
            banner: BrandWhite
        },
        {
            id: uuidv4(),
            name: 'Nike',
            link: '#',
            banner: BrandNike
        },
        {
            id: uuidv4(),
            name: 'Adidas',
            link: '#',
            banner: BrandAdidas
        },
        {
            id: uuidv4(),
            name: 'Puma',
            link: '#',
            banner: BrandPuma
        },
        {
            id: uuidv4(),
            name: 'Calvin',
            link: '#',
            banner: BrandCalvin
        },
        {
            id: uuidv4(),
            name: 'Channel',
            link: '#',
            banner: BrandChannel
        }
    ];

    const ReviewProps = [
        {
            id: uuidv4(),
            name: 'joão j.',
            review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed',
            star: 5,
            banner  : Review1
        },
        {
            id: uuidv4(),
            name: 'Marie k.',
            review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed',
            star: 5,
            banner: Review2
        },
        {
            id: uuidv4(),
            name: 'Thomas p.',
            review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed',
            star: 5,
            banner: Review3
        },
        {
            id: uuidv4(),
            name: 'joão j.',
            review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed',
            star: 4,
            banner: Review1
        }
    ];

    const InstagramBannerProps = [
        {
            id: uuidv4(),
            name: '@befashion',
            banner  : Instagram1
        },
        {
            id: uuidv4(),
            name: '@befashion',
            banner: Instagram2
        },
        {
            id: uuidv4(),
            name: '@befashion',
            banner: Instagram3
        },
        {
            id: uuidv4(),
            name: '@befashion',
            banner: Instagram4
        },
        {
            id: uuidv4(),
            name: '@befashion',
            banner: Instagram5
        },
        {
            id: uuidv4(),
            name: '@befashion',
            banner: Instagram1
        }
    ];

    const fullBannerList = fullBannerProps.map((banner) => (
        <SwiperSlide key={banner.id}>
            <FullBanner {...banner} />
        </SwiperSlide>
    ));

    const CentralBannerList = CentralBannerProps.map((banner) => (
        <CentralBanner key={banner.id} {...banner} />
    ));

    const CollectionBannersList = CollectionBannerProps.map((banner) => (
        <CollectionBanners key={banner.id} {...banner} />
    ));

    const BrandList = BrandsProps.map((brand) => (
        <SwiperSlide key={brand.id}>
            <BrandBanner {...brand} />
        </SwiperSlide>
    ));

    const ReviewList = ReviewProps.map((review) => (
        <SwiperSlide key={review.id}>
            <ReviewStore {...review} />
        </SwiperSlide>
    ));

    const productsList = products.map((product) => (
        <SwiperSlide key={product.id}>
            <ProductCard {...product} />
        </SwiperSlide>
    ));

    const instagramList = InstagramBannerProps.map((instagram) => (
        <SwiperSlide key={instagram.id}>
            <InstagramFeed {...instagram} />
        </SwiperSlide>
    ));

    return (
        <>
            {/* Full Banner */}
            <FullBannerContainer>
                <SlideProductNavigation>
                    <div className="swiper-button prev">
                        <CaretLeft size={24}  weight="bold" />
                    </div>
                    <div className="swiper-button next">
                        <CaretRight size={24}  weight="bold" /> 
                    </div> 
                </SlideProductNavigation>
                <Swiper
                    slidesPerView={1}
                    grabCursor={true}
                    navigation={{
                        nextEl: ".swiper-button.next",
                        prevEl: ".swiper-button.prev",
                        disabledClass: "swiper-button-disabled"
                    }}
                >  
                    { fullBannerList }
                </Swiper>
            </FullBannerContainer>

            {/* Info Bar */}
            <InfoBar />

            {/* Central Banners */}
            <ContainerCentralBanner>
                { CentralBannerList }
            </ContainerCentralBanner>

            {/* List Products */}
            <HomeProductContainer>
                <h2>PRODUTOS EM DESTAQUE</h2>
                <div className='dots dots-product1'></div>
                <SlideNavigation>
                    <div className="swiper-button prev product1">
                        <CaretLeft size={24}  weight="bold" />
                    </div>
                    <div className="swiper-button next product1">
                        <CaretRight size={24}  weight="bold" /> 
                    </div> 
                </SlideNavigation>
                <section>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.5}
                        grabCursor={true}
                        navigation={{
                            nextEl: ".swiper-button.next.product1",
                            prevEl: ".swiper-button.prev.product1",
                            disabledClass: "swiper-button-disabled"
                        }}
                        pagination={{
                            el: '.dots.dots-product1'
                        }}
                        breakpoints={{
                            520: {
                                slidesPerView: 2.3,
                                spaceBetween: 10,
                            },
                            1024: {
                            slidesPerView: 4,
                            spaceBetween: 7,
                            },
                        }}
                    >  
                        { productsList }
                    </Swiper>
                </section>
            </HomeProductContainer>

            {/* Collections Banners */}
            <ContainerCollectionBanner>
                { CollectionBannersList }
            </ContainerCollectionBanner>

            {/* List Brands */}
            <HomeProductContainer>
                <h2>Nossas melhores marcas</h2>
                <div className='dots dots-brand'></div>
                <SlideNavigation>
                    <div className="swiper-button prev brand">
                        <CaretLeft size={24}  weight="bold" />
                    </div>
                    <div className="swiper-button next brand">
                        <CaretRight size={24}  weight="bold" /> 
                    </div> 
                </SlideNavigation>
                <section>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={3}
                        grabCursor={true}
                        navigation={{
                            nextEl: ".swiper-button.next.brand",
                            prevEl: ".swiper-button.prev.brand",
                            disabledClass: "swiper-button-disabled"
                        }}
                        pagination={{
                            el: '.dots.dots-brand'
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 7,
                            },
                        }}
                    >  
                        { BrandList }
                    </Swiper>
                </section>
            </HomeProductContainer>

            {/* List Products */}
            <HomeProductContainer>
                <h2>PRODUTOS MAIS VENDIDOS</h2>
                <div className='dots dots-product2'></div>
                <SlideNavigation>
                    <div className="swiper-button prev product2">
                        <CaretLeft size={24}  weight="bold" />
                    </div>
                    <div className="swiper-button next product2">
                        <CaretRight size={24}  weight="bold" /> 
                    </div> 
                </SlideNavigation>
                <section>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.5}
                        grabCursor={true}
                        navigation={{
                            nextEl: ".swiper-button.next.product2",
                            prevEl: ".swiper-button.prev.product2",
                            disabledClass: "swiper-button-disabled"
                        }}
                        pagination={{
                            el: '.dots.dots-product2'
                        }}
                        breakpoints={{
                            520: {
                                slidesPerView: 2.3,
                                spaceBetween: 10,
                            },
                            1024: {
                            slidesPerView: 4,
                            spaceBetween: 7,
                            },
                        }}
                    >  
                        { productsList }
                    </Swiper>
                </section>
            </HomeProductContainer>

            {/* Section Video */}
            <VideoBanner video={CoverVideo} />

            {/* List reviews */}
            <HomeProductContainer>
                <h2>Veja o que dizem sobre nós</h2>
                <div className='dots dots-reviews'></div>
                <SlideNavigation>
                    <div className="swiper-button prev reviews">
                        <CaretLeft size={24}  weight="bold" />
                    </div>
                    <div className="swiper-button next reviews">
                        <CaretRight size={24}  weight="bold" /> 
                    </div> 
                </SlideNavigation>
                <section>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1}
                        grabCursor={true}
                        navigation={{
                            nextEl: ".swiper-button.next.reviews",
                            prevEl: ".swiper-button.prev.reviews",
                            disabledClass: "swiper-button-disabled"
                        }}
                        pagination={{
                            el: '.dots.dots-reviews'
                        }}
                        breakpoints={{
                            520: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                            slidesPerView: 3,
                            spaceBetween: 7,
                            },
                        }}
                    >  
                        { ReviewList }
                    </Swiper>
                </section>
            </HomeProductContainer>

            {/* List Products */}
            <HomeProductContainer>
                <h2>OFERTAS DA SEMANA</h2>
                <div className='dots dots-product3'></div>
                <SlideNavigation>
                    <div className="swiper-button prev product3">
                        <CaretLeft size={24}  weight="bold" />
                    </div>
                    <div className="swiper-button next product3">
                        <CaretRight size={24}  weight="bold" /> 
                    </div> 
                </SlideNavigation>
                <section>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.5}
                        grabCursor={true}
                        navigation={{
                            nextEl: ".swiper-button.next.product3",
                            prevEl: ".swiper-button.prev.product3",
                            disabledClass: "swiper-button-disabled"
                        }}
                        pagination={{
                            el: '.dots.dots-product3'
                        }}
                        breakpoints={{
                            520: {
                                slidesPerView: 2.3,
                                spaceBetween: 10,
                            },
                            1024: {
                            slidesPerView: 4,
                            spaceBetween: 7,
                            },
                        }}
                    >  
                        { productsList }
                    </Swiper>
                </section>
            </HomeProductContainer>

            {/* Instagram Feed */}
            <InstagramFeedContainer>
                <header>
                    <InstagramLogo size={32} weight="light" />
                    <h2><span>SIGA NOS NO INSTAGRAM</span> @befashion</h2>
                </header>
                <section>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.5}
                        grabCursor={true}
                        breakpoints={{
                            520: {
                                slidesPerView: 2.3,
                                spaceBetween: 10,
                            },
                            1024: {
                            slidesPerView: 4.5,
                            spaceBetween: 7,
                            },
                        }}
                    >  
                        { instagramList }
                    </Swiper>
                </section>
            </InstagramFeedContainer>
        </>
    )
}
