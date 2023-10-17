<script>
  import MetaTags from "../components/MetaTags.svelte";
  import PrimaryBtn from "../components/buttons/PrimaryBtn.svelte";
  import SecondaryBtn from "../components/buttons/SecondaryBtn.svelte";
  import H2 from "../components/headers/H2.svelte";
  import CommonWave from "../components/waves/CommonWave.svelte";

  const news = [
    {
      name: "ホームページをリニューアルしました",
      date: "2023-10-20",
      href: "/news/hp-renewal",
      image: "/photos/tobamaru.webp"
    },
    {
      name: "2023鳥羽丸フォトコンテストを開催します！",
      date: "2022-10-08",
      href: "/news/2023-photo-contest",
      image: "/photos/commemorative-photo.webp"
    },
    {
      name: "第一回 鳥羽丸見学を実施しました",
      date: "2023-04-21",
      href: "/news/1st-tobamaru-visit",
      image: "/photos/looking.webp"
    }
  ];

  const events = [
    {
      name: "2023鳥羽丸フォトコンテスト",
      date: ["2023-11-08", "17:00"],
      target: ["鳥羽商船学生"],
      neededApplication: false,
      okUnofficialParticipate: false,
      href: "/news/1st-tobamaru-visit"
    }
  ];
</script>

<svelte:head>
  <script src="https://snapwidget.com/js/snapwidget.js" />
</svelte:head>

<MetaTags
  title="Tobamaru Project Team"
  description="Tobamaru Project Teamは、代船入替えに向けて記念行事、在校生や卒業生の鳥羽商船に対する愛着や地域の人々の親しみをより深めるための企画を検討する学生団体です。"
  href="/"
/>

<header>
  <img
    src="/photos/header.webp"
    alt="ヘッダー"
  />
  <div class="header-wave">
    <CommonWave />
  </div>
</header>

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
      <H2>
        鳥羽丸とは？
      </H2>
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
        href="/3rd-tobamaru"
      />
    </article>
  </section>

  <section id="news">
    <article>
      <H2>ニュース</H2>
      <div>
        鳥羽丸とTobamaru Project Teamについての最新情報を掲載します
      </div>
    </article>
    <div class="news">
      <ul>
        {#each news as article}
          <li>
            <a href={article.href}>
              <img
                src={article.image}
                alt={article.name}
              />
              <div>
                <div>
                  <span class="published-at">
                    {article.date}
                  </span>
                </div>
                <h3>
                  {article.name}
                </h3>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <div class="blue-bg-area">
    <section id="events" class="column-2">
      <article>
        <H2 whiteWave>
          イベント
        </H2>
        <div>
          不定期に鳥羽丸に関するイベントを開催しています
        </div>

        <ul class="events">
          {#each events as event}
            <li>
              <a href={event.href}>
                <button aria-label={event.name}>
                  <h3>
                    {event.name}
                  </h3>
                  <div class="date">
                    {event.date[0]}
                    <span>・</span>
                    {event.date[1]}
                  </div>
                  <ul class="badge">
                    <li class="target">
                      対象: {event.target.join(", ")}
                    </li>
                    {#if event.neededApplication}
                      <li class="needed-application">
                        予約必須
                      </li>
                    {/if}
                    {#if event.okUnofficialParticipate}
                      <li class="ok-unofficial-participate">
                        飛び入り参加歓迎
                      </li>
                    {/if}
                  </ul>
                </button>
              </a>
            </li>
          {/each}
        </ul>
      </article>

      <figure class="right-image">
        <img
          src="/photos/looking.webp"
          alt="望遠鏡を見る女の子"
        />
      </figure>
    </section>

    <section id="instagram">
      <article>
        <H2 whiteWave>
          Instagram
        </H2>
        <div>
          定期的に鳥羽丸や鳥羽商船にまつわる情報を投稿します
        </div>
      </article>
      <iframe
        title="Instagramの投稿"
        src="https://snapwidget.com/embed/1017460"
        class="snapwidget-widget instagram-feed"
      />
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
      <H2>
        Tobamaru Project Teamとは？
      </H2>

      <div>
        <p>
          Tobamaru Project Teamは、
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
            label="活動規約"
            href="/terms.pdf"
          />
        </p>
        <p>
          <PrimaryBtn
            label="私もチームの一員になりたい！"
            href="/joinus"
          />
        </p>
      </div>
    </article>
  </section>
</main>

<style>
  header {
    width: 100%;
    height: 95dvh;
    background-color: rgb(134, 134, 225);
    position: relative;
  }

  header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header-wave {
    width: 100%;
    color: var(--bg-color);
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .header-wave::after {
    content: "";
    width: 100%;
    height: 0.5rem;
    background-color: var(--bg-color);
    position: absolute;
    bottom: -0.2rem;
  }

  main {
    min-height: auto;
    margin: auto;
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
    clip-path: polygon(0 0, 0 50%, 50% 0, 100% 50%, 100% 0);
  }

  .blue-bg-area::after {
    content: "";
    width: 100%;
    height: 10rem;
    background-color: var(--bg-color);
    position: absolute;
    bottom: 0;
    clip-path: polygon(0 100%, 0 50%, 50% 100%, 100% 50%, 100% 100%);
  }

  .button-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button-column p {
    margin-bottom: 2rem;
  }

  .news {
    width: 90vw;
    height: 22rem;
    margin-top: 2rem;
    overflow-x: auto;
  }

  .news ul {
    height: calc(100% - 0.5rem);
    display: grid;
    grid-auto-flow: column;
    gap: 2.5rem;
  }

  .news ul > li {
    width: 25rem;
    height: 100%;
  }

  .news a {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    text-align: left;
    background-color: var(--primary-btn-bg-color);
    box-shadow: 0 0.25rem 0.1rem var(--primary-btn-shadow-color);
    overflow: hidden;
    display: block;
  }

  .news a > img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }

  .news a > div {
    width: 100%;
    height: calc(100% - 15rem);
    padding: 0.25rem 1rem;
  }

  .news .published-at {
    color: var(--primary-color);
    font-size: 1rem;
    padding: 0.1rem 2rem;
    background-color: var(--bg-color);
    border-radius: 0.5rem;
  }

  .news h3 {
    color: var(--primary-color);
    text-align: center;
    margin-top: 0.25rem;
  }

  .events {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .events > li {
    width: 100%;
    margin-bottom: 1rem;
  }

  .events > li > a > button {
    width: 100%;
    text-align: left;
    background-color: var(--bg-color);
    box-shadow: 0 0.25rem 0.1rem var(--primary-btn-shadow-color);
    padding: 1rem;
    border-radius: 1rem;
  }

  .events h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .events .date {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .events .badge {
    font-size: 1rem;
    display: flex;
    flex-direction: row;
  }

  .events .badge > * {
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .events .target {
    background-color: var(--secondary-btn-bg-color);
    border-radius: 1rem;
  }

  .events .needed-application {
    color: rgb(239, 68, 68);
    background-color: var(--secondary-btn-bg-color);
    border-radius: 1rem;
  }

  .events .ok-unofficial-participate {
    color: rgb(101, 163, 13);
    background-color: var(--secondary-btn-bg-color);
    border-radius: 1rem;
  }

  .instagram-feed {
    width: 100vw;
    height: 100vw;
    background-color: var(--bg-color);
    margin-top: 2rem;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
  }

  @media (min-width: 1024px) {
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

    .news {
      width: 90vw;
      height: 23.5rem;
      margin-top: 2rem;
      overflow-x: auto;
    }

    .events {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .instagram-feed {
      width: 80vw;
      height: 80vw;
      background-color: var(--bg-color);
      margin-top: 2rem;
      padding: 1rem;
      border: none;
      border-radius: 1rem;
    }
  }
</style>
