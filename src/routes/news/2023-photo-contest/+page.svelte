<script>
  import MetaTags from "../../../components/MetaTags.svelte";
  import H2 from "../../../components/headers/H2.svelte";
  import PrimaryBtn from "../../../components/buttons/PrimaryBtn.svelte";
  import { PUBLIC_TEAM_EMAIL } from "$env/static/public";
</script>

<MetaTags
  title="2023鳥羽丸フォトコンテストを開催します！"
  description="応募期間は10月8日～11月8日！賞金も出るよ！"
  href="/news/2023-photo-contest"
/>

<main>
  <article>
    <H2>
      2023鳥羽丸フォトコンテストを開催します！
    </H2>
  </article>

  <div id="poster">
    <div>
      <img
        src="/news/2023-photo-contest/poster.webp"
        alt="2023鳥羽丸フォトコンテストを開催します！応募期間は10月8日～11月8日！賞金も出るよ！"
      />
    </div>

    <PrimaryBtn
      href="/news/2023-photo-contest/guidelines.pdf"
      label="詳しい募集要項を見る！"
    />
  </div>

  <article id="how-to-apply">
    <H2>
      応募方法
    </H2>
    <div>
      上のポスターに書かれているメールアドレスに、以下の内容を記載して送信してください。

      <ul>
        <li>件名: 2023鳥羽丸写真コンテスト</li>
        <li>① 応募者氏名</li>
        <li>② メールアドレス</li>
        <li>③ 連絡先の住所</li>
        <li>④ 応募作品の作品名</li>
        <li>⑤ 撮影日</li>
        <li>⑥ 撮影機材（スマホ可）</li>
        <li>これらを示し、写真データを添付します。</li>
        <li>複数の写真を応募する場合は、ファイル名と上記④、⑤、⑥が対応するようにしてください。</li>
      </ul>

      <div class="duration">
        応募期間:　10月8日（日） ～ 11月8日（水）
      </div>

      <PrimaryBtn
        href={`mailto:${PUBLIC_TEAM_EMAIL}`}
        label="ポスターの宛先でメールアプリを開く！"
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

  #how-to-apply {
    margin-top: 10rem;
  }

  #how-to-apply > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 1rem;
    border: solid 0.25rem var(--primary-color);
    border-radius: 1rem;
  }

  li {
    text-align: left;
  }

  .duration {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  @media (min-width: 1024px) {
    ul {
      width: 70%;
      margin-top: 3rem;
      margin-bottom: 3rem;
      padding: 1rem;
      border: solid 0.25rem var(--primary-color);
      border-radius: 1rem;
    }
  }
</style>
