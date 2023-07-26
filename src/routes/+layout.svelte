<script>
  import "./reset.css";
  import "./global.css";
</script>

<menu>
  <h1>
    <a href="/">
      logo
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

<footer>footer</footer>

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
    width: 15rem;
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

  footer {
    width: 100%;
    height: 10rem;
    background-color: var(--primary-color);
    color: rgb(255, 255, 255);
  }
</style>
