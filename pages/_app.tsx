import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import useModern from '../hooks/useModern';
import Menu from '../lib/menu';
import Footer from '../lib/footer';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  // スマホ表示の最適化、ユーザーのカラーテーマの適応をサポート
  useModern();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultSeo
        titleTemplate="%s - Tobamaru Project Team検討会"
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.route}`,
          description: 'Tobamaru Project Team検討会のウェブサイトです。',
          site_name: 'Tobamaru Project Team検討会 ウェブサイト',
          images: [{
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.webp`,
            width: 512,
            height: 512,
            alt: 'Tobamaru Project Team検討会のロゴ',
            type: 'image/webp'
          }]
        }}
        twitter={{
          site: '@takara2314',
          cardType: 'summary'
        }}
      />

      <Menu />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
