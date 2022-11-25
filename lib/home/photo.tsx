import { Headline1 } from '../../components/headline';
import { BsInstagram } from 'react-icons/bs';
import AnimationTrigger from '../../components/animationTrigger';

const Photo = () => {
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

      <div className="mt-10 p-5 w-full md:w-3/4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl">
        <h3 className="mb-3 text-white text-left font-medium flex flex-row">
          <BsInstagram className="mr-3 text-2xl text-white" />
          鳥羽丸Last Year Project検討会 Instagramの投稿
        </h3>
        <div className="w-full h-64 bg-white rounded-xl">

        </div>
      </div>
    </section>
  );
};

export default Photo;
