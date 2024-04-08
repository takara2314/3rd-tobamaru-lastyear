<script>
  import MetaTags from "../../../components/MetaTags.svelte";
  import H2 from "../../../components/headers/H2.svelte";
</script>

<MetaTags
  title="【予告】2024鳥羽丸写真コンテストを開催します！"
  description="応募期間は10月8日～11月8日！"
  href="/news/2024-photo-contest"
/>

<main>
  <article>
    <H2 newsDatetime="2024-04-08 21:33">
      【予告】2024鳥羽丸写真コンテストを開催します！
    </H2>
  </article>

  <div id="poster">
    <div>
      2024も鳥羽丸写真コンテストを開催します！応募期間は前回と同じ10月8日～11月8日の予定です。
      <br>
      応募される方は６月中旬までに撮影をお願いします。
      <br>
      応募方法などは詳細が決まり次第追記します。
    </div>

    <!-- <PrimaryBtn
      href="/news/2023-photo-contest/guidelines.pdf"
      label="詳しい募集要項を見る！"
    /> -->
  </div>
</main>

<style>
  #poster {
    width: 100%;
  }

  #poster > div {
    margin-bottom: 3rem;
  }
</style>
