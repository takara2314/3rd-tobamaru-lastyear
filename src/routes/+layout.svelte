<script>
  import "./reset.css";
  import "./global.css";
</script>

<menu>
  <h1>
    <a href="/">
      <img
        src="/logo.svg"
        alt="ロゴ"
        class="logo"
      />
    </a>
  </h1>
  <ul>
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

<footer>
  <ul>
    <li>
      <a href="https://www.toba-cmt.ac.jp/">
        鳥羽商船高等専門学校 ウェブサイト
      </a>
    </li>
    <li>
      <a href="/#">
        プライバシーポリシー
      </a>
    </li>
    <li>
      <a href="https://github.com/takara2314/3rd-tobamaru-lastyear/tree/v2-develop">
        このサイトのソースコード
      </a>
    </li>
  </ul>

  <small>
    © 2023 Tobamaru Project Team
  </small>
</footer>

<style>
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

  menu h1 {
    width: 30rem;
  }

  menu ul {
    width: calc(100% - 15rem);
    display: flex;
    flex-direction: row;
    justify-content: end;
  }

  menu ul li {
    font-size: 0.8rem;
    margin-left: 5rem;
  }

  menu ul li a {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  menu ul li a div {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  menu ul li a div img {
    width: 100%;
    margin-bottom: -0.5rem;
  }

  .logo {
    height: 100%;
  }

  footer {
    width: 100%;
    background-color: var(--primary-color);
    color: rgb(255, 255, 255);
    text-align: left;
    padding: 3rem;
  }

  footer ul {
    margin-bottom: 2rem;
  }
</style>
