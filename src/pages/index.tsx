import { stripe } from "../lib/stripe";
import { MainContainer, CardProduct } from '../styles/pages/index';
import { GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Link from "next/link";
import React from "react";

interface TypeProducts {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: string
  }[]
}

export default function Home({ products }: TypeProducts) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.8
    }
  })

  return (
    <>
      <MainContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <CardProduct className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
                <footer>
                  <h2>{ product.name }</h2>
                  <span>{ product.price }</span>
                </footer>
              </CardProduct>
            </Link>
          );
        })}
      </MainContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });
  
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    const formatPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatPrice,
    }
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 / 2, // 2 hours
  }

};