import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar />
      <Header />
      <Menu />
      <Component {...pageProps} />
    </>
  )
}
