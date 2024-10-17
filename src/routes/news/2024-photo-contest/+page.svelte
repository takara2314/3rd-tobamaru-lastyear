<script>
  import MetaTags from "../../../components/MetaTags.svelte";
  import H2 from "../../../components/headers/H2.svelte";
  import PrimaryBtn from "../../../components/buttons/PrimaryBtn.svelte";
</script>

<MetaTags
  title="【募集中！】2024鳥羽丸写真コンテストを開催します！"
  description="今年も開催！応募期間は10月8日～10月31日！"
  href="/news/2024-photo-contest"
/>

<main>
  <article>
    <H2 newsDatetime="2024-10-08 00:00">
      【募集中！】2024鳥羽丸写真コンテストを開催します！
    </H2>
  </article>

  <div id="poster">
    <div>
      <img
        src="/news/2024-photo-contest/poster.webp"
        alt="2023鳥羽丸写真コンテストを開催します！応募期間は10月8日～11月8日！賞金も出るよ！"
        width="45%"
      />
    </div>

    <div>
      2024も鳥羽丸写真コンテストを開催します！応募期間は10月8日～10月31日の予定です。(11月8日までとありましたが変更になりました)
      <br>
      ６月中旬に鳥羽丸退役とポンツーンの架替えがある為、応募される方はそれまでに撮影をお願いします。
      <!-- <br>
      応募方法などは詳細が決まり次第追記します。 -->
    </div>

    <PrimaryBtn
      href="/news/2024-photo-contest/guidelines.pdf"
      label="詳しい募集要項を見る！"
    />
  </div>

  <article id="how-to-apply">
    <br>
    <H2>
      応募方法
    </H2>
    <div>
      以下のformsに必要情報を入力してください。
      <br>
      <br>
      
      <PrimaryBtn
        href="https://forms.office.com/r/67qq9c6cEy"
        label="応募フォーム"
      />

      <br>
      <br>

      <div class="duration">
        応募期間:　10月8日（火） ～ 10月31日（金）
        <!-- <span class="notice">
          ※応募終了しました。沢山のご応募ありがとうございました。
        </span> -->
      </div>

      <!-- <PrimaryBtn
        href={`mailto:${PUBLIC_TEAM_EMAIL}`}
        label="ポスターの宛先でメールアプリを開く！"
      /> -->
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
