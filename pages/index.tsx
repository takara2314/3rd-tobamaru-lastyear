import type { NextPage } from 'next';
import Main from '../components/main';
import About from '../lib/home/about';
import Information from '../lib/home/information';
import Message from '../lib/home/message';
import Photo from '../lib/home/photo';
import Profile from '../lib/home/profile';

const title = 'ホーム';
const description = 'ホームです';

const Home: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <section className="w-screen h-[calc(100vh-17.5rem)] md:h-[calc(100vh-12.5rem)] bg-blue-500 relative -left-[2.5rem] -top-[2.5rem]">
        <div className="wrapper absolute bottom-[-27.5vw] left-[40vw]">
          <div className="wrapper-inner">
            <div className="scroll-down">
              <span className="arrow-down">
              </span>
              <span className="scroll-title">
                Scroll down
              </span>
            </div>
          </div>
        </div>
      </section>

      <Information />
      <About />
      <Message />
      <Photo />
      <Profile />
    </Main>
  );
};

export default Home;
