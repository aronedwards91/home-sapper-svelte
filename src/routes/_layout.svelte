<script>
  import Nav from "../components/Nav.svelte";
  import resp from "../utils/responsive";
  import utils from "../utils";
  export let segment;

  var mobMaxWidth = "(max-width: " + resp.maxWidthMob + ")";
  var deskMinWidth = "(min-width: " + resp.minWidthTablet + ")";
</script>

<style>
  :global(:root) {
    --desktop-min: 1100px;
    --tablet-min: 600px;
  }
  .background {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -100;
    overflow: hidden;
  }
  .background img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .siteroot {
    display: flex;
    flex-direction: column;
  }
  header {
    flex: 0 0 100%;
    padding-top: 30px;
    margin-bottom: 2em;
  }
  .mainwrap {
    min-width: 240px;
    padding: 1em;
  }
  main {
    padding: 0 1em;
    width: 100vw;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1100px) {
    .siteroot {
      flex-direction: row;
    }
    header {
      flex: 0 1 300px;
      padding-top: 60px;
    }
    .mainwrap {
      min-width: 400px;
      max-width: 1000px;
      padding: 4em;
      margin: 0 auto;
    }
    main {
      padding: 0 5em;
      width: calc(100vw - 300px);
    }
  }
  .title {
    max-width: 56em;
    min-width: none;
    margin: auto;
    background-color: white;
    padding: 2em;
    margin-bottom: 2em;
    display: inline-block;
  }
  .title h1 {
    margin-bottom: 0;
  }
  .pagemain {
    margin-bottom: 4em;
  }
</style>

<svelte:head>
  <title>Aron{segment === undefined ? '' : ' | ' + segment}</title>
</svelte:head>

<div class="background">
  <picture>
    <source
      media={mobMaxWidth}
      srcset="Mountain_view_in_Robson_valley_mob.webp" />
    <source media={deskMinWidth} srcset="Mountain_view_in_Robson_valley.webp" />
    <img src="Mountain_view_in_Robson_valley.webp" alt="background" />
  </picture>
</div>

<div class="siteroot" style="--minTab: {resp.minWidthTablet}px">
  <header>
    <Nav {segment} />
  </header>
  <main>
    <div class="title">
      <h1>
        {utils.firstLetterUpper(segment === undefined ? 'Home' : segment)}
      </h1>
    </div>
    <div class="bg-blur pagemain">
      <div class="bg-whitesoft mainwrap">
        <slot />
      </div>
    </div>
  </main>
</div>
