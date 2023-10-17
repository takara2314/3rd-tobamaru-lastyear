<script>
  import MetaTags from "../../components/MetaTags.svelte";
  import H2 from "../../components/headers/H2.svelte";
  import {
    PUBLIC_CHAIRPERSON_EMAIL,
    PUBLIC_X_NAME
  } from "$env/static/public";
</script>

<MetaTags
  title="お問い合わせ"
  description="当団体についてのご質問やご意見、ご要望などがございましたら、お気軽にお問い合わせください。"
  href="/contact"
/>

<main>
  <article>
    <H2>
      お問い合わせ
    </H2>
    <div>
      <p>
        当団体についてのご質問やご意見、ご要望などがございましたら、お気軽にお問い合わせください。
      </p>
      <p>
        会長が確認のうえ、1週間以内に返信いたします。
      </p>
    </div>

    <ul>
      <li>
        <a href={`mailto:${PUBLIC_CHAIRPERSON_EMAIL}`}>
          <button
            aria-label="メールでお問い合わせ"
            class="mail"
          >
            メールでお問い合わせ
          </button>
        </a>
      </li>
      <li>
        <a href={`https://x.com/${PUBLIC_X_NAME}`}>
          <button
            aria-label="X（旧Twitter）でお問い合わせ"
            class="x"
          >
            X（旧Twitter）でお問い合わせ
          </button>
        </a>
      </li>
    </ul>
  </article>
</main>

<style>
  ul {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  li {
    width: 20rem;
    height: 3rem;
  }

  a {
    width: 100%;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  .mail {
    color: var(--primary-color);
    background-color: var(--primary-btn-bg-color);
    box-shadow: 0 0.25rem 0.1rem var(--primary-btn-shadow-color);
  }

  .x {
    color: white;
    background-color: rgb(15, 20, 25);
    box-shadow: 0 0.25rem 0.1rem rgba(15, 20, 25, 0.25);
  }

  @media (min-width: 1024px) {
    li {
      width: 25rem;
      height: 3rem;
    }
  }
</style>
