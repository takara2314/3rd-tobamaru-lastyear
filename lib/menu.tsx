import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import useScrollPosition from '../hooks/useScrollPosition';

const Menu = () => {
  const posY = useScrollPosition();
  const [nowSection, setNowSection] = useState<string>('');

  const aboutRef = useRef<HTMLElement | null>();
  const messageRef = useRef<HTMLElement | null>();
  const photoRef = useRef<HTMLElement | null>();
  const profileRef = useRef<HTMLElement | null>();

  useEffect(() => {
    aboutRef.current = document.getElementById('about');
    messageRef.current = document.getElementById('message');
    photoRef.current = document.getElementById('photo');
    profileRef.current = document.getElementById('profile');
  }, []);

  useEffect(() => {
    setNowSection('');

    if (aboutRef.current) {
      if (posY >= aboutRef.current.offsetTop - 500) {
        setNowSection('about');
      }
    }

    if (messageRef.current) {
      if (posY >= messageRef.current.offsetTop - 500) {
        setNowSection('message');
      }
    }

    if (photoRef.current) {
      if (posY >= photoRef.current.offsetTop - 500) {
        setNowSection('photo');
      }
    }

    if (profileRef.current) {
      if (posY >= profileRef.current.offsetTop - 500) {
        setNowSection('profile');
      }
    }
  }, [posY]);

  useEffect(() => {
    console.log(nowSection);
  }, [nowSection]);

  return (
    <nav className="w-full h-16 shadow-xl flex flex-row fixed top-0 left-0 z-10">
      <section className="w-[calc(100%-4rem)] h-full flex flex-row">
        <Link href="/">
          <div className="w-[20rem] h-full">
            <Image
              src="/logo.webp"
              alt="ロゴ"
              width={866}
              height={288}
              className="h-full"
            />
          </div>
        </Link>

        <ul className="px-5 w-full text-xl flex flex-row justify-around leading-[4rem] invisible md:visible">
          <li>
            TOP
          </li>
          <li className="relative">
            ABOUT
            <div className={
              nowSection === 'about'
                ? 'w-full h-1 bg-tobamaru-300 rounded-full absolute bottom-2 transition-colors duration-300'
                : 'w-full h-1 bg-none rounded-full absolute bottom-2 transition-colors duration-300'
            } />
          </li>
          <li className="relative">
            MESSAGE
            <div className={
              nowSection === 'message'
                ? 'w-full h-1 bg-tobamaru-300 rounded-full absolute bottom-2 transition-colors duration-300'
                : 'w-full h-1 bg-none rounded-full absolute bottom-2 transition-colors duration-300'
            } />
          </li>
          <li className="relative">
            PHOTO
            <div className={
              nowSection === 'photo'
                ? 'w-full h-1 bg-tobamaru-300 rounded-full absolute bottom-2 transition-colors duration-300'
                : 'w-full h-1 bg-none rounded-full absolute bottom-2 transition-colors duration-300'
            } />
          </li>
          <li className="relative">
            PROFILE
            <div className={
              nowSection === 'profile'
                ? 'w-full h-1 bg-tobamaru-300 rounded-full absolute bottom-2 transition-colors duration-300'
                : 'w-full h-1 bg-none rounded-full absolute bottom-2 transition-colors duration-300'
            } />
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
