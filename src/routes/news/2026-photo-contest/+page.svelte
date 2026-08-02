<script>
  import MetaTags from "../../../components/MetaTags.svelte";
  import H2 from "../../../components/headers/H2.svelte";
  import PrimaryBtn from "../../../components/buttons/PrimaryBtn.svelte";
</script>

<MetaTags
  title="2026鳥羽丸フォトコンテストを開催します！"
  description="今年も開催！応募期間は8月1日～10月8日12時！"
  href="/news/2026-photo-contest"
/>

<main>
  <article>
    <H2 newsDatetime="2026-08-02 19:00">
      2026鳥羽丸フォトコンテストを開催します！
    </H2>
  </article>

  <div id="poster">
    <div>
      <img
        src="/news/2026-photo-contest/poster.webp"
        alt="2026鳥羽丸フォトコンテストを開催します！応募期間は8月1日～10月8日12時！"
        width="45%"
      />
    </div>

    <div>
      2026も鳥羽丸フォトコンテストを開催します！応募期間は8月1日～10月8日12時です。
    </div>

    <PrimaryBtn
      href="/news/2026-photo-contest/guidelines.pdf"
      label="詳しい募集要項を見る！"
    />
  </div>

  <article id="how-to-apply">
    <br />
    <H2>応募方法</H2>
    <div>
      以下のformsに必要情報を入力してください。
      <br />
      <br />

      <PrimaryBtn
        href="https://forms.gle/3jwHL8c7Zb6Mw3HL7"
        label="応募フォーム"
      />
    </div>
  </article>
</main>

<style>
  #poster {
    width: 100%;
  }

  #poster > div {
    margin-bottom: 3rem;
  }
</style>
