import type { NextPage } from 'next';
import Image from 'next/image';
import Main from '../components/main';

const title = 'ホーム';
const description = 'ホームです';

const Home: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
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
