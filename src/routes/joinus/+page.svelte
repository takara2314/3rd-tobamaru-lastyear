<script>
  import MetaTags from "../../components/MetaTags.svelte";
  import H2 from "../../components/headers/H2.svelte";

  const groups = [
    {
      name: "鳥羽丸班",
      description: "団体内で行う鳥羽丸見学の企画調整等を担当します。​",
      comment: ""
    },
    {
      name: "フォトコン班",
      description: " 主に「2023鳥羽丸フォトコンテスト」について担当し、海学祭展示などを行います。",
      comment: "J科学生も活躍中！"
    },
    {
      name: "クラフト班",
      description: "鳥羽丸グッズの制作と海学祭模擬店での販売を担当します。",
      comment: "J科学生がグッズ制作！"
    },
    {
      name: "広報班",
      description: "鳥羽丸やTobamaru Project Teamについての広報を担当します。",
      comment: "J科学生が当サイトを作成！"
    },
    {
      name: "渉外班",
      description: "同窓会などの学外との調整を担当し、有名人の招致のためにテレビ局の企画への応募等を行います。",
      comment: ""
    }
  ];
</script>

<MetaTags
  title="Tobamaru Project Teamに入会する"
  description="Tobamaru Project Teamに入会する方法を紹介します。"
  href="/joinus"
/>

<main>
  <article id="joinus">
    <H2>
      Tobamaru Project Teamに入会する
    </H2>
    <div>
      <p>
        当団体に興味をお持ちいただき、ありがとうございます！
      </p>
      <p>
        鳥羽商船高等専門学校の学生であれば、どなたでも入会することができます。
      </p>
      <p>
        入会を希望される方は、以下の方法でお問い合わせください。
      </p>
    </div>

    <div class="join-way">
      学籍番号21139の学生（会長）に、Teamsのダイレクトメッセージで
      <span class="join-way-important">
        入会の意、やりたいことを伝える
      </span>
    </div>
  </article>

  <article id="works">
    <H2>
      お仕事一覧
    </H2>

    <ul>
      {#each groups.slice(0, 3) as group}
        <li>
          <h3>
            {group.name}
          </h3>
          {group.description}
          <div class="comment">
            {group.comment}
          </div>
        </li>
      {/each}
    </ul>

    <ul class="second-line">
      {#each groups.slice(3, groups.length) as group}
        <li>
          <h3>
            {group.name}
          </h3>
          {group.description}
          <div class="comment">
            {group.comment}
          </div>
        </li>
      {/each}
    </ul>
  </article>
</main>

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .join-way {
    width: 90%;
    margin-top: 3rem;
    padding: 1rem;
    border: solid 0.25rem var(--primary-color);
    border-radius: 9999px;
  }

  .join-way-important {
    color: var(--primary-color);
    font-weight: bold;
  }

  #works {
    margin-top: 15rem;
  }

  ul {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
  }

  ul.second-line {
    margin-top: 1rem;
  }

  li {
    width: 20rem;
    height: 11.5rem;
    font-size: 1rem;
    padding: 1rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .comment {
    color: rgb(239, 68, 68);
    margin-top: 0.5rem;
    background-color: var(--secondary-btn-bg-color);
    border-radius: 1rem;
  }

  @media (min-width: 1024px) {
    .join-way {
      width: 70vw;
      margin-top: 3rem;
      padding: 1rem;
      border: solid 0.25rem var(--primary-color);
      border-radius: 9999px;
    }

    ul {
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      gap: auto;
    }
  }
</style>
