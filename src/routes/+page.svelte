<script>
  import { PUBLIC_SITE_URL } from "$env/static/public";
  import PrimaryBtn from "./buttons/PrimaryBtn.svelte";
</script>

<header>header</header>

<main>
  <section id="whats-tobamaru" class="column-2">
    <div class="left-image">
      <img
        src="/photos/tobamaru.webp"
        alt="鳥羽丸"
      />
      <small>
        撮影者:　福野 泰介
      </small>
    </div>

    <div class="right-article">
      <h2>
        鳥羽丸とは？
      </h2>

      <article>
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
      </article>

      <PrimaryBtn
        label="詳しいプロフィールを見る！"
      />
    </div>
  </section>

  <section id="news">
  </section>

  <section id="events">
  </section>

  <section id="instagram">
  </section>

  <section id="whats-tobamaru-project-team">
  </section>
</main>

<style>
  header {
    width: 100%;
    height: 100dvh;
    background-color: rgb(134, 134, 225);
  }

  section {
    margin-top: 15rem;
    margin-bottom: 15rem;
  }

  .column-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .column-2 div {
    width: 50%;
  }

  .left-image {
    height: 90dvh;
    padding-right: 3rem;
    position: relative;
  }

  .left-image img {
    height: 100%;
    object-fit: cover;
    border-radius: 0 1rem 1rem 0;
  }

  .left-image small {
    position: absolute;
    bottom: 0;
    right: 3rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 0.5rem 3rem;
    border-radius: 1rem 0 1rem 0;
  }

  .right-article {
    padding: 4rem;
  }

  .right-article p {
    margin-bottom: 2rem;
  }

  article {
    margin-bottom: 4rem;
  }
</style>
