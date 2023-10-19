<script>
  import { page } from "$app/stores";
  import MetaTags from "../components/MetaTags.svelte"
    import PrimaryBtn from "../components/buttons/PrimaryBtn.svelte";
  import H2 from "../components/headers/H2.svelte"
</script>

<MetaTags
  title="お探しの港は見当たりません"
  description="存在しないページです"
  href="/point"
/>

<main>
  <article>
    {#if $page.status == 404}
      <H2>
        お探しの港は見当たりません
      </H2>
      <div>
        <p>
          申し訳ございません。そのページは存在しません...
        </p>
      </div>
    {:else}
      <H2>
        船の調子が悪いようです
      </H2>
      <div>
        <p>
          申し訳ございません。サーバーでエラーが発生しました...
        </p>
        <p>
          回復までしばらくお待ちください。
        </p>
      </div>
    {/if}
  </article>

  <div class="return-top-page">
    <PrimaryBtn
      href="/"
      label="トップページに戻る"
    />
  </div>
</main>

<style>
  .return-top-page {
    margin-top: 3rem;
  }
</style>
