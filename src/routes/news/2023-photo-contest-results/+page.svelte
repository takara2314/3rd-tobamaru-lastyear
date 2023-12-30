<script>
  import MetaTags from "../../../components/MetaTags.svelte";
  import H2 from "../../../components/headers/H2.svelte";
  import PrimaryBtn from "../../../components/buttons/PrimaryBtn.svelte";
  import { PUBLIC_TEAM_EMAIL } from "$env/static/public";

  const awards = [
    {
      award: "最優秀賞",
      title: "We love Tobamaru",
      img: "/news/2023-photo-contest-results/1st-award.webp",
      comment: "",
      awardWinnerClass: "商船学科航海コース5年 学生"
    },
    {
      award: "優秀賞",
      title: "寒そうな鳥羽丸",
      img: "/news/2023-photo-contest-results/2nd-award-1.webp",
      comment: "",
      awardWinnerClass: "商船学科航海コース3年 学生"
    },
    {
      award: "優秀賞",
      title: "夕焼けに映る鳥羽丸",
      img: "/news/2023-photo-contest-results/2nd-award-2.webp",
      comment: "",
      awardWinnerClass: "商船学科2年 学生"
    },
    {
      award: "校長賞",
      title: "青い",
      img: "/news/2023-photo-contest-results/principal-award.webp",
      comment: "",
      awardWinnerClass: "商船学科航海コース3年 学生"
    },
    {
      award: "商船学科長賞",
      title: "係留中の鳥羽丸",
      img: "/news/2023-photo-contest-results/head-of-maritime-tech-award.webp",
      comment: "",
      awardWinnerClass: "商船学科航海コース3年 学生"
    },
    {
      award: "鳥羽丸船長賞",
      title: "池の浦の夕暮れ",
      img: "/news/2023-photo-contest-results/tobamaru-captain-award.webp",
      comment: "",
      awardWinnerClass: "高専46期 航海コース17年卒 OB"
    },
    {
      award: "鳥羽丸機関長賞",
      title: "お疲れさまでした",
      img: "/news/2023-photo-contest-results/tobamaru-chief-engineer-award.webp",
      comment: "",
      awardWinnerClass: "商船学科機関コース3年 学生"
    },
    {
      award: "鳥羽丸一等機関士賞",
      title: "実習後",
      img: "/news/2023-photo-contest-results/tobamaru-1st-engineer-award.webp",
      comment: "",
      awardWinnerClass: "海事システム専攻科1年 学生"
    },
    {
      award: "鳥羽丸運航センター長賞",
      title: "腹減った",
      img: "/news/2023-photo-contest-results/tobamaru-operation-manager-award.webp",
      comment: "",
      awardWinnerClass: "商船学科機関コース3年 学生"
    },
    {
      award: "鳥羽商船同窓会賞",
      title: "鳥羽丸が見たもの",
      img: "/news/2023-photo-contest-results/tobacmt-obog-award.webp",
      comment: "",
      awardWinnerClass: "商船学科機関コース3年 学生"
    }
  ];
</script>

<MetaTags
  title="【結果発表】2023鳥羽丸写真コンテストの結果発表"
  description="45作品の応募の中から、厳正なる審査の結果、入賞作品を決定しました！"
  href="/news/2023-photo-contest-result"
/>

<main>
  <article>
    <H2 newsDatetime="2023-12-30 16:30">
      【結果発表】2023鳥羽丸写真コンテストの結果発表
    </H2>

    <p>
      17名の方から45作品の応募をいただきました。ありがとうございました！
    </p>
    <p>
      厳正なる審査の結果、入賞作品が決定しましたので、発表いたします。
    </p>
  </article>

  <section class="awards">
    {#each awards as { award, title, img, comment, awardWinnerClass }}
      <div class="award">
        <div>
          <h3>
            {award}『{title}』
          </h3>
          <p>
            受賞者: {awardWinnerClass}
          </p>
          <p class="comment">
            {comment}
          </p>
        </div>
        <img src={img} alt={title} />
      </div>
    {/each}
  </section>

  <article>
    <p>
      以上10作品が入賞作品となります。
    </p>
    <p>
      入賞者の皆様、おめでとうございます！
    </p>
  </article>
</main>

<style>
  .awards {
    margin-top: 5rem;
    margin-bottom: 0;
    padding: 4rem;
  }

  .award {
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }

  .award div {
    padding-top: 5rem;
    width: 50%;
  }

  .award div h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
    font-size: 2rem;
  }

  .award img {
    width: 50%;
  }

  .comment {
    margin-top: 5rem;
  }

  @media (min-width: 1024px) {
    .award {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-direction: row-reverse;
      gap: 1rem;
    }
  }
</style>
