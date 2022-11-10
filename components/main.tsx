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

      <main className="p-10 text-lg w-screen min-h-[calc(100vh-7rem)] bg-white overflow-x-hidden overflow-y-auto">
        {children}
      </main>
    </>
  );
};

export default Main;
