import React from 'react';
import { GetStaticProps } from 'next';
import Home, { HomeProps }  from './home/index.page';
import { fetchProducts } from '@/utils/fetchProducts';

export default function IndexPage(props) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
    revalidate: (60 * 60) * 1 // 1 HOUR
  };
};
