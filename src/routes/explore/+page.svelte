<script>
  import MetaTags from "../../components/MetaTags.svelte";
  import H2 from "../../components/headers/H2.svelte";
</script>

<MetaTags
  title="鳥羽丸探検"
  description="鳥羽丸をストリートビューで探検しましょう！"
  href="/explore"
/>

<main>
  <article>
    <H2>
      鳥羽丸を探検してみよう
    </H2>
    <div>
      Google Mapsのストリートビューで鳥羽丸を探検しましょう！
    </div>
  </article>

  <div id="street-view">
    <iframe
      title="鳥羽丸ストリートビュー"
      src="https://www.google.com/maps/embed?pb=!4v1697532010919!6m8!1m7!1sCAoSLEFGMVFpcE04VEQzSWRoOHUzaDFSMl9sUXM3OHdaWVBkcU9VeUJkQXZlQkF0!2m2!1d34.482331214363!2d136.82449751617!3f338.1413199854713!4f-7.983307532190992!5f0.7820865974627469" 
      width="600"
      height="450"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />

    <menu>
      Coming soon...
    </menu>
  </div>
</main>

<style>
  iframe {
    width: 100%;
    height: 100svh;
    border: none;
  }

  #street-view {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #street-view iframe {
    width: 100%;
    margin-bottom: 1rem;
  }

  #street-view menu {
    width: 90%;
    height: 50svh;
    margin-left: 2.5%;
    margin-top: 2.5%;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    #street-view {
      margin-top: 3rem;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    #street-view iframe {
      width: 70%;
      margin-bottom: auto;
      border-radius: 0 1rem 1rem 0;
    }

    #street-view menu {
      width: 25%;
      height: 50svh;
      margin-left: 2.5%;
      margin-top: 2.5%;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
