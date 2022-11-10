import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';

const Menu = () => {
  return (
    <nav className="w-full h-16 shadow-xl flex flex-row fixed top-0 left-0 z-10">
      <section className="w-[calc(100%-4rem)] h-full flex flex-row">
        <Link href="/">
          <div className="pl-10 w-[20rem] text-2xl text-tobamaru-500 font-bold leading-[4rem]">
            ありがとう 3代目鳥羽丸
          </div>
        </Link>

        <ul className="px-5 w-full text-xl flex flex-row justify-around leading-[4rem]">
          <li>
            TOP
          </li>
          <li>
            ABOUT
          </li>
          <li>
            PROFILE
          </li>
          <li>
            MESSAGE
          </li>
        </ul>
      </section>

      <Link
        href="https://www.instagram.com/3rdtobamaru_lastyear/"
        className="w-16 h-16 flex flex-col justify-center items-center bg-tobamaru-500"
      >
        <BsInstagram className="text-3xl text-white" />
      </Link>
    </nav>
  );
};

export default Menu;
