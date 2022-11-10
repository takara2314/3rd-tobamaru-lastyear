import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import useModern from '../hooks/useModern';
// import Menu from '../lib/menu/menu';
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
        titleTemplate="%s - 鳥羽丸Last Year Project検討会"
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.route}`,
          description: '鳥羽丸Last Year Project検討会のウェブサイトです。',
          site_name: '鳥羽丸Last Year Project検討会 ウェブサイト',
          images: [{
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.webp`,
            width: 512,
            height: 512,
            alt: '鳥羽丸Last Year Project検討会のロゴ',
            type: 'image/webp'
          }]
        }}
        twitter={{
          site: '@takara2314',
          cardType: 'summary'
        }}
      />

      {/* <Menu /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
