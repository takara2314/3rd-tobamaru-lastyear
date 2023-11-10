<script>
  import MetaTags from "../../../components/MetaTags.svelte";
  import H2 from "../../../components/headers/H2.svelte";
</script>

<MetaTags
  title="新しい鳥羽丸の情報が日経新聞で紹介されました"
  description="日経新聞で新しい鳥羽丸の情報が紹介されました。コックピット型そうだ室が導入されます。"
  href="/news/new-tobamaru-nikkei"
/>

<main>
  <article>
    <H2 newsDatetime="2023-11-10 14:00">
      新しい鳥羽丸の情報が日経新聞で紹介されました
    </H2>
    <div>
      <p>
        新しい鳥羽丸の設備の情報が紹介されました。
      </p>
      <p>
        詳しくは以下の記事をご覧ください。
      </p>

      <div class="link-area">
        <a
          href="https://www.nikkei.com/article/DGXZQOFD259010V21C23A0000000/"
          class="link"
        >
          日本経済新聞:　鳥羽商船高専、新練習船を導入　コックピット型そうだ室
        </a>
      </div>
    </div>
  </article>
</main>

<style>
  .link-area {
    margin-top: 1rem;
  }

  .link {
    color: var(--primary-color);
  }
</style>
