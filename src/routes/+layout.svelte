<script>
  import "./reset.css";
  import "./global.css";
  import CommonWave from "../components/waves/CommonWave.svelte";
  import {
    PUBLIC_INSTAGRAM_NAME,
    PUBLIC_X_NAME
  } from "$env/static/public";

  let isShowMenu = false;

  function handleClickHamburger() {
    isShowMenu = !isShowMenu;
  }

  function handleModalClickBackground() {
    isShowMenu = false;
  }
</script>

<menu>
  <div>
    <button
      class="hamburger-btn"
      aria-label="メニューを開く"
      aria-expanded={isShowMenu}
      aria-controls="menu-container"
      aria-haspopup="menu"
      on:click={handleClickHamburger}
    >
      <div />
      <div />
      <div />
    </button>
    <h1 class="title">
      <a href="/">
        <img
          src="/logo.svg"
          alt="ロゴ"
          class="logo"
        />
      </a>
    </h1>
  </div>
  <ul class="pc">
    <li>
      <a href="/history">
        <div>
          <img
            src="/icons/ship.svg"
            alt="鳥羽丸の歴史"
          />
        </div>
        鳥羽丸の歴史
      </a>
    </li>
    <li>
      <a href="/explore">
        <div>
          <img
            src="/icons/compass.svg"
            alt="鳥羽丸の歴史"
          />
        </div>
        鳥羽丸探検
      </a>
    </li>
    <li>
      <a href="/point">
        <div>
          <img
            src="/icons/ribbon.svg"
            alt="鳥羽丸の歴史"
          />
        </div>
        ここがスゴイ！
      </a>
    </li>
    <li>
      <a href="/contact">
        <div>
          <img
            src="/icons/letter.svg"
            alt="お問い合わせ"
          />
        </div>
        お問い合わせ
      </a>
    </li>
  </ul>
</menu>

<slot />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="modal-background"
  style={isShowMenu ? "display:block" : "display:none"}
  on:click={handleModalClickBackground}
/>
<ul
  class="sp"
  style={isShowMenu ? "display:block" : "display:none"}
>
  <li class="title-area">
    <h1 class="title">
      <a href="/">
        <img
          src="/logo.svg"
          alt="ロゴ"
          class="logo"
        />
      </a>
    </h1>
  </li>
  <li>
    <a href="/history">
      <div>
        <img
          src="/icons/ship.svg"
          alt="鳥羽丸の歴史"
        />
      </div>
      鳥羽丸の歴史
    </a>
  </li>
  <li>
    <a href="/explore">
      <div>
        <img
          src="/icons/compass.svg"
          alt="鳥羽丸の歴史"
        />
      </div>
      鳥羽丸探検
    </a>
  </li>
  <li>
    <a href="/point">
      <div>
        <img
          src="/icons/ribbon.svg"
          alt="鳥羽丸の歴史"
        />
      </div>
      ここがスゴイ！
    </a>
  </li>
  <li>
    <a href="/contact">
      <div>
        <img
          src="/icons/letter.svg"
          alt="お問い合わせ"
        />
      </div>
      お問い合わせ
    </a>
  </li>
</ul>

<footer>
  <div class="footer-wave">
    <CommonWave />
  </div>

  <div class="sns-area-parent">
    <ul class="site-link-area">
      <li>
        <a href="https://www.toba-cmt.ac.jp/">
          鳥羽商船高等専門学校 ウェブサイト
        </a>
      </li>
      <li>
        <a href="https://www.maritime.toba-cmt.ac.jp/">
          商船学科 ウェブサイト
        </a>
      </li>
      <li>
        <a href="https://github.com/takara2314/3rd-tobamaru-lastyear">
          このサイトのソースコード
        </a>
      </li>
      <li class="copyright">
        <small>
          © 2023 Tobamaru Project Team
        </small>
      </li>
    </ul>

    <ul class="sns-area">
      <li>
        <a href={`https://instagram.com/${PUBLIC_INSTAGRAM_NAME}/`}>
          <button
            aria-label="インスタグラムのリンク"
            class="mail"
          >
            <img
              src="/logos/instagram.svg"
              alt="Instagram"
              width="80px"
              height="80px"
            />
          </button>
        </a>
      </li>
      <li>
        <a href={`https://x.com/${PUBLIC_X_NAME}`}>
          <button
            aria-label="X（旧Twitter）のリンク"
            class="x"
          >
            <img
              src="/logos/x.svg"
              alt="X"
            />
          </button>
        </a>
      </li>
    </ul>
  </div>
</footer>

<style>
  menu {
    width: calc(100% - 2rem);
    height: 4rem;
    background-color: white;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    z-index: 10;
  }

  menu div {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  button.hamburger-btn {
    width: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }

  button.hamburger-btn div {
    width: 100%;
    height: 0.25rem;
    background-color: var(--primary-color);
    border-radius: 0.25rem;
  }

  h1.title a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    height: 100%;
  }

  ul.pc {
    display: none;
  }

  .modal-background {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
  }

  ul.sp {
    width: 80%;
    height: 100%;
    padding: 2rem;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
  }

  ul.sp li {
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  ul.sp li.title-area {
    margin-bottom: 3rem;
  }

  ul.sp li a {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 1rem;
  }

  ul.sp li a div {
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ul.sp li a div img {
    width: 2rem;
  }

  footer {
    width: 100%;
  }

  footer ul {
    color: rgb(255, 255, 255);
    text-align: left;
    padding: 2rem;
  }

  .copyright {
    margin-top: 2rem;
  }

  .footer-wave {
    width: 100%;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .footer-wave::after {
    content: "";
    width: 100%;
    height: 0.5rem;
    background-color: var(--primary-color);
    position: absolute;
    bottom: -0.2rem;
  }

  .sns-area-parent {
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column-reverse;
  }

  .site-link-area {
    width: 100%;
  }

  .sns-area {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .sns-area li {
    width: 5rem;
    height: 5rem;
    background-color: white;
    border-radius: 1rem;
  }

  .sns-area img {
    width: 100%;
    padding: 1.25rem;
  }

  @media (min-width: 1024px) {
    menu {
      width: calc(100% - 3rem);
      height: 5rem;
      background-color: white;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
      border-radius: 1rem;
      padding-left: 2rem;
      padding-right: 2rem;
      display: flex;
      flex-direction: row;
      position: fixed;
      top: 1.5rem;
      left: 1.5rem;
      right: 1.5rem;
      z-index: 10;
    }

    menu div {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    button.hamburger-btn {
      display: none;
    }

    h1.title {
      width: 30rem;
    }

    .logo {
      height: 80%;
    }

    ul.pc {
      width: calc(100% - 5rem);
      display: flex;
      flex-direction: row;
      justify-content: end;
      gap: 5rem;
    }

    ul.pc li {
      font-size: 0.8rem;
    }

    ul.pc li a {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    ul.pc li a div {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    ul.pc li a div img {
      width: 100%;
      margin-bottom: -0.5rem;
    }

    footer ul {
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      text-align: left;
      padding: 3rem;
    }

    .sns-area-parent {
      background-color: var(--primary-color);
      display: flex;
      flex-direction: row;
    }

    .site-link-area {
      width: 75%;
    }

    .sns-area {
      width: 25%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
</style>
