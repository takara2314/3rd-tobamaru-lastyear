<script>
  import MetaTags from "../../../components/MetaTags.svelte";
  import H2 from "../../../components/headers/H2.svelte";
</script>

<MetaTags
  title="ページ追加のテスト"
  description="プッシュとか色々試すよ"
  href="/news/push-test"
/>

<main>
  <article>
    <H2 newsDatetime="2024-03-24 10:40">
      コピー
    </H2>

    <div>
      <p>
        今年の鳥羽商船の学校だよりの表紙に、2023鳥羽丸写真コンテストの受賞作品の写真が掲載されました！
      </p>
      <p>
        詳しくは以下の記事をご覧ください。
      </p>

      <div class="link-area">
        <a
          href="https://koho.s.toba-cmt.ac.jp/wp/wp-content/uploads/gakkoudayori-95.pdf"
          class="link"
        >
          鳥羽商船高等専門学校 学校だより Vol.95（2023）
        </a>
      </div>

      <p class="others">
        その他の受賞作品は以下の記事をご覧ください。
      </p>

      <div class="link-area">
        <a
          href="/news/2023-photo-contest-results"
          class="link"
        >
        【結果発表】2023鳥羽丸写真コンテストの結果発表
        </a>
      </div>
    </div>
  </article>

  <div class="cover-area">
    <a href="https://koho.s.toba-cmt.ac.jp/wp/wp-content/uploads/gakkoudayori-95.pdf">
      <img
        src="/news/school-newsletter-95/newsletter-cover.webp"
        alt="学校だより Vol.95 表紙"
      />
    </a>
  </div>
</main>

<style>
  .link-area {
    margin-top: 1rem;
  }

  .link {
    color: var(--primary-color);
  }

  .others {
    margin-top: 5rem;
  }

  .cover-area {
    margin-top: 5rem;
  }
</style>
