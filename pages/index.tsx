import type { NextPage } from 'next';
import Image from 'next/image';
import { Headline1 } from '../components/headline';
import Main from '../components/main';

const title = 'ホーム';
const description = 'ホームです';

const Home: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <section className="w-screen h-[calc(100vh-12.5rem)] bg-blue-500 relative -left-[2.5rem] -top-[2.5rem]">

      </section>

      <section className="w-screen h-16 bg-blue-900 flex flex-row justify-center relative -left-[2.5rem] -top-[2.5rem]">
        <h2 className="pr-10 text-xl text-white leading-[4rem]">
          INFORMATION
        </h2>
        <div className="w-[80%] flex flex-col justify-center">
          <div className="px-10 w-full h-10 leading-10 text-left bg-white rounded-xl">
            <span className="mr-5 text-gray-500">
              2022.11.18
            </span>
            サイトを公開しました！
          </div>
        </div>
      </section>

      <Headline1
        label="ABOUT"
        id="about"
      />

      <h1 className="text-tobamaru-500 font-bold">
        Hello world!
      </h1>

      <div className="w-96">
        <Image
          src="/illustration.webp"
          alt="イラスト"
          className="rounded-xl"
          width={720}
          height={405}
        />
      </div>
    </Main>
  );
};

export default Home;
