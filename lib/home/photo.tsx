import { Headline1 } from '../../components/headline';
import { BsInstagram } from 'react-icons/bs';

const Photo = () => {
  return (
    <section className="mt-20 text-xl w-full flex flex-col items-center">
      <Headline1
        label="PHOTO"
        id="photo"
      />

      2022鳥羽丸写真コンテストでご応募があったものの写真を掲載しています。

      <div className="mt-5 p-5 w-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl">
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