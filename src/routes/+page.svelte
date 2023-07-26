<script>
  import { PUBLIC_SITE_URL } from "$env/static/public";
  import PrimaryBtn from "./buttons/PrimaryBtn.svelte";
  import SecondaryBtn from "./buttons/SecondaryBtn.svelte";
</script>

<header>header</header>

<main>
  <section id="whats-tobamaru" class="column-2">
    <figure class="left-image">
      <img
        src="/photos/tobamaru.webp"
        alt="鳥羽丸"
      />
      <figcaption>
        撮影者:　福野 泰介
      </figcaption>
    </figure>

    <article>
      <h2>
        鳥羽丸とは？
      </h2>
      <div>
        <p>
          鳥羽丸（とばまる）とは、
          鳥羽商船高等専門学校が保有する練習船です。
        </p>
        <p>
          現在は1994年に建造された3代目が運用されており、
          主に商船学科の学生の航海実習に使用されています。
        </p>
        <p>
          これまで、多くの方の記憶に刻まれていた
          3代目鳥羽丸はまもなく引退予定です。
        </p>
      </div>

      <PrimaryBtn
        label="詳しいプロフィールを見る！"
      />
    </article>
  </section>

  <section id="news">
    <h2>ニュース</h2>

    <article>
      鳥羽丸と鳥羽丸プロジェクトチームについての最新情報を掲載します
    </article>
  </section>

  <div class="blue-bg-area">
    <section id="events" class="column-2">
      <article>
        <h2 white-wave>
          イベント
        </h2>
        <div>
          不定期に鳥羽丸に関するイベントを開催しています
        </div>
      </article>

      <figure class="right-image">
        <img
          src="/photos/looking.webp"
          alt="望遠鏡を見る女の子"
        />
      </figure>
    </section>

    <section id="instagram">
      <h2 white-wave>
        Instagram
      </h2>
      <div>
        定期的に鳥羽丸や鳥羽商船にまつわる情報を投稿します
      </div>
    </section>
  </div>

  <section id="whats-tobamaru-project-team" class="column-2">
    <figure class="left-image">
      <img
        src="/photos/commemorative-photo.webp"
        alt="集合写真"
      />
    </figure>

    <article>
      <h2>
        鳥羽丸プロジェクトチームとは？
      </h2>

      <div>
        <p>
          鳥羽丸プロジェクトチームは、
        </p>
        <p>
          代船入替えに向けて記念行事、
        </p>
        <p>
          在校生や卒業生の鳥羽商船に対する愛着や
        </p>
        <p>
          地域の人々の親しみをより深めるための
        </p>
        <p>
          企画を検討する学生団体です。
        </p>
        <p>
          （学校から結成承認済み）
        </p>
      </div>

      <div class="button-column">
        <p>
          <SecondaryBtn
            label="活動方針"
          />
        </p>
        <p>
          <PrimaryBtn
            label="私もチームの一員になりたい！"
          />
        </p>
      </div>
    </article>
  </section>
</main>

<style>
  header {
    width: 100%;
    height: 100dvh;
    background-color: rgb(134, 134, 225);
  }

  section {
    width: 100%;
    margin-top: 15rem;
    margin-bottom: 15rem;
  }

  .column-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .column-2 > * {
    width: 50%;
  }

  .left-image {
    height: 70dvh;
    padding-right: 3rem;
    position: relative;
  }

  .left-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 1rem 1rem 0;
  }

  .left-image figcaption {
    position: absolute;
    bottom: 0;
    right: 3rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 0.5rem 3rem;
    border-radius: 1rem 0 1rem 0;
  }

  .right-image {
    height: 70dvh;
    padding-left: 3rem;
    position: relative;
  }

  .right-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem 0 0 1rem;
  }

  /* .right-image figcaption {
    position: absolute;
    bottom: 0;
    left: 3rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 0.5rem 3rem;
    border-radius: 0 1rem 0 1rem;
  } */

  .column-2 article {
    padding: 2rem 4rem;
  }

  .column-2 article div:not(.button-column) > p {
    margin-bottom: 1rem;
  }

  .column-2 article > div {
    margin-bottom: 4rem;
  }

  .blue-bg-area {
    background-color: var(--section-bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .blue-bg-area::before {
    content: "";
    width: 100%;
    height: 10rem;
    background-color: var(--bg-color);
    position: absolute;
    top: 0;
    clip-path: polygon(0 0, 0 100%, 50% 0, 100% 100%, 100% 0);
  }

  .blue-bg-area::after {
    content: "";
    width: 100%;
    height: 10rem;
    background-color: var(--bg-color);
    position: absolute;
    bottom: 0;
    clip-path: polygon(0 100%, 0 0, 50% 100%, 100% 0, 100% 100%);
  }

  .button-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button-column p {
    margin-bottom: 2rem;
  }
</style>
