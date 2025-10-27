<script>
  import MetaTags from "../../../components/MetaTags.svelte";
    import PrimaryBtn from "../../../components/buttons/PrimaryBtn.svelte";
  import H2 from "../../../components/headers/H2.svelte";
</script>

<MetaTags
  title="2025年鳥羽丸体験乗船者募集！"
  description="第60回海学祭にあわせて、練習船「鳥羽丸」で体験航海を実施します。"
  href="/news/school-newsletter-95"
/>

<main>
  <article>
    <H2 newsDatetime="2025-10-27 19:00">
      2025年鳥羽丸体験乗船者募集！
    </H2>

    <div>
      <p>
        第60回海学祭にあわせて、練習船「鳥羽丸」で体験航海を実施します。
        <br>
        今年の海学祭では、4代目「鳥羽丸」に乗って航海と船内見学を体験できます。
        <br>
        参加希望者は、以下の応募フォームからお申し込みください。また、詳細はポスターをご覧ください。
      </p>
      <div class="link-area">
        <PrimaryBtn label="応募フォーム" href="https://docs.google.com/forms/d/e/1FAIpQLSd-b2zS6n4RlVbrN4GlbijWyDlM8CkVdZslOwFywuZC6WfVBA/viewform" />
      </div>
    </div>
  </article>

  <div class="cover-area">
    <a href="/news/tobamaru-taiken-25/poster.webp" target="_blank" rel="noopener noreferrer">
      <img
        src="/news/tobamaru-taiken-25/poster.webp"
        alt="練習船鳥羽丸体験航海参加者募集ポスター"
        style="max-width: 500px;"
      />
    </a>
  </div>
</main>

<style>
  .link-area {
    margin-top: 1rem;
  }
  .cover-area {
    margin-top: 5rem;
  }
</style>
