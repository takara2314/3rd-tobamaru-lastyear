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
        description="1994年に鳥羽商船高等専門学校の練習船として竣工された3代目鳥羽丸は、2025年3月に引退予定です。これまで多くの学生の航海実習に使われた鳥羽丸にありがとうを。"
        openGraph={{
          title: title,
          description: '1994年に鳥羽商船高等専門学校の練習船として竣工された3代目鳥羽丸は、2025年3月に引退予定です。これまで多くの学生の航海実習に使われた鳥羽丸にありがとうを。'
        }}
      />

      <main className="p-10 text-lg w-screen h-[calc(100vh-4rem)] text-center overflow-x-hidden overflow-y-auto absolute top-[4rem] left-0">
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Main;
