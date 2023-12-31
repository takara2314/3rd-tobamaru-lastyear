<script>
  import MetaTags from "../../components/MetaTags.svelte";
  import H2 from "../../components/headers/H2.svelte";
</script>

<MetaTags
  title="鳥羽丸の歴史"
  description="鳥羽丸の歴史を解説します。"
  href="/history"
/>

<main>
  <article>
    <H2>
      鳥羽丸の歴史
    </H2>
    <div>
      <p>
        商船学校の歴史は、校内練習船を中心に展開してきたと言っても過言ではありません。
      </p>
      <p>
        練習船は、在学中に海と船に習熟し、運航に必要な知識や技能を修得するために欠かせないものです。本校は百十余年の歴史を持ち、時代に応じた練習船が建造されています。
      </p>
    </div>

    <div class="link-area">
      <a
        href="https://www.maritime.toba-cmt.ac.jp/tobamaru/ship_history"
        class="link"
      >
        鳥羽丸の歴史（商船学科ホームページ）
      </a>
    </div>
  </article>
</main>

<style>
  article > div {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .link-area {
    margin-top: 1rem;
  }

  .link {
    color: var(--primary-color);
  }
</style>
