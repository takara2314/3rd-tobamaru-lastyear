import type { NextPage } from 'next';
import { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import type { YouTubeProps } from 'react-youtube';
import Main from '../components/main';
import About from '../lib/home/about';
import Information from '../lib/home/information';
import Message from '../lib/home/message';
import Photo from '../lib/home/photo';
import Profile from '../lib/home/profile';

const title = 'ホーム';
const description = 'ホームです';

const Home: NextPage = () => {
  const containerObj = useRef<HTMLElement>(null);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!containerObj.current) {
      return;
    }

    const id = setInterval(resize, 500);

    return () => {
      clearInterval(id);
    };
  }, [containerObj]);

  const resize = () => {
    setWidth(containerObj.current!.clientWidth);
    setHeight(containerObj.current!.clientHeight);
  };

  const handlePlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
    event.target.mute();
  };

  const handleStateChange: YouTubeProps['onStateChange'] = (event) => {
    switch (event.data) {
      case 0:
        event.target.playVideo();
        break;
    }
  };

  return (
    <Main
      title={title}
      description={description}
    >
      <section
        className="w-screen h-[calc(100vh-17.5rem)] md:h-[calc(100vh-12.5rem)] bg-black relative -left-[2.5rem] -top-[2.5rem]"
        ref={containerObj}
      >
        {width !== 0 && height !== 0 && (
          <YouTube
            videoId="0arHEswe0gA"
            opts={{
              width: width,
              height: height,
              playerVars: {
                autoplay: 1
              }
            }}
            onReady={handlePlayerReady}
            onStateChange={handleStateChange}
          />
        )}

        <div className="wrapper absolute bottom-0 right-0 md:right-10">
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
