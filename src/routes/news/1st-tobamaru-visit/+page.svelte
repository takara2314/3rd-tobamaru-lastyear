<script>
  import MetaTags from "../../../components/MetaTags.svelte";
  import H2 from "../../../components/headers/H2.svelte";
</script>

<MetaTags
  title="第一回 鳥羽丸見学を実施しました"
  description="鳥羽商船学生対象の鳥羽丸見学を実施しました。"
  href="/news/1st-tobamaru-visit"
/>

<main>
  <article>
    <H2>
      第一回 鳥羽丸見学を実施しました
    </H2>
    <div>
      <p>
        4月21日に初めての鳥羽丸見学会を実施しました！
      </p>
      <p>
        商船学科の学生だけでなく、情報機械システム工学科の1年生も3人参加してもらい、
        ブリッジ（船橋）（操舵をする部屋）を見学してもらいました。
      </p>
    </div>
  </article>

  <ul>
    <li>
      <img
        src="/photos/looking.webp"
        alt="望遠鏡を見る女の子"
      />
    </li>
    <li>
      <img
        src="/photos/commemorative-photo.webp"
        alt="集合写真"
      />
    </li>
  </ul>
</main>

<style>
  ul {
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  li {
    height: 50svh;
  }

  @media (min-width: 1024px) {
    img {
      border-radius: 1rem;
    }
  }
</style>
