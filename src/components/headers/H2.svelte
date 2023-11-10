<script>
  import HeaderWave from "../waves/HeaderWave.svelte";
  export let newsDatetime = null;
  export let whiteWave = false;
</script>

<h2>
  <slot />

  {#if newsDatetime}
    <time datetime="{newsDatetime}">
      {newsDatetime.split(" ")[0]}
    </time>
  {/if}

  <div whiteWave={whiteWave ? whiteWave : null}>
    <HeaderWave />
  </div>
</h2>

<style>
  h2 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  h2 > div {
    content: '';
    width: 20rem;
    height: 0.25rem;
    color: var(--gray-wave-color);
    position: relative;
    top: 1rem;
  }

  h2 > div[whiteWave] {
    content: '';
    width: 20rem;
    height: 0.25rem;
    color: var(--white-wave-color);
    position: absolute;
    top: 2.5rem;
  }

  h2 > time {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: var(--text-color);
  }
</style>
