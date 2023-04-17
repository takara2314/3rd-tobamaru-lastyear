import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { Headline1 } from '../../components/headline';
import { BsInstagram } from 'react-icons/bs';
import AnimationTrigger from '../../components/animationTrigger';

const Photo = () => {
  const frameObj = useRef<HTMLDivElement>(null);
  const [frameHeight, setFrameHeight] = useState<number>(0);

  useEffect(() => {
    if (!frameObj.current) {
      return;
    }

    setFrameHeight(frameObj.current.offsetWidth);
  }, [frameObj]);

  return (
    <section className="mt-20 text-xl w-full flex flex-col items-center">
      <Headline1
        label="PHOTO"
        id="photo"
      />

      <AnimationTrigger
        animation="fadeIn"
        rootMargin="100px"
        triggerOnce
      >
        2022鳥羽丸写真コンテストでご応募があったものの写真を掲載しています。
      </AnimationTrigger>

      <div className="mt-10 p-3 md:p-5 w-full md:w-3/4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl">
        <h3 className="mb-3 text-white text-left font-medium flex flex-row">
          <BsInstagram className="mr-3 text-2xl text-white" />
          鳥羽丸Last Year Project検討会 Instagramの投稿
        </h3>
        <div
          className="w-full bg-white rounded-xl"
          style={{ height: frameHeight }}
          ref={frameObj}
        >
          <Script src="https://snapwidget.com/js/snapwidget.js" />
          <iframe
            src="https://snapwidget.com/embed/1017460"
            className="snapwidget-widget w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Photo;
