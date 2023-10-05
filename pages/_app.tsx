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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="google-site-verification" content="RYiFLBdutEA6x8UCiLv5OrUgIXP5AasQUSXiv8hMRgE" />
      </Head>

      <DefaultSeo
        titleTemplate="%s - Tobamaru Project Team"
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.route}`,
          description: 'Tobamaru Project Teamのウェブサイトです。',
          site_name: 'Tobamaru Project Team ウェブサイト',
          images: [{
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.webp`,
            width: 512,
            height: 512,
            alt: 'Tobamaru Project Teamのロゴ',
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
