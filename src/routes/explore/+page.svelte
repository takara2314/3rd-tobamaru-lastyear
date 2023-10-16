<script>
  import MetaTags from "../../components/MetaTags.svelte";
  import PrimaryBtn from "../../components/buttons/PrimaryBtn.svelte";
  import SecondaryBtn from "../../components/buttons/SecondaryBtn.svelte";
</script>

<MetaTags
  title="鳥羽丸探検"
  description="鳥羽丸をストリートビューで探検しましょう！"
  href="/explore"
/>

<main>
  <h2>
    鳥羽丸探検
  </h2>
  工事中
</main>

<style>
  main {
    min-height: calc(100svh - (20rem + 15rem));
    margin: 10rem 0;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 5rem;
  }
</style>
