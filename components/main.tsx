import type { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import Footer from '../lib/footer';

interface Props {
  children: ReactNode;
  title: string;
  description: string;
}

const Main = ({ children, title, description }: Props) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />

      <main className="p-10 text-lg w-screen h-[calc(100vh-4rem)] text-center overflow-x-hidden overflow-y-auto absolute top-[4rem] left-0">
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Main;
