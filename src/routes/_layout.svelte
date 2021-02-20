<script>
  import Nav from "../components/Nav.svelte";
  import resp from "../utils/responsive";
  import utils from "../utils";
  export let segment;

  var mobMaxWidth = "(max-width: " + resp.maxWidthMob + ")";
  var deskMinWidth = "(min-width: " + resp.minWidthTabDesk + ")";
</script>

<svelte:head>
  <title>Aron{segment === undefined ? "" : " | " + segment}</title>
</svelte:head>

<div class="background">
  <picture>
    <source
      media={mobMaxWidth}
      srcset="Mountain_view_in_Robson_valley_mob.webp"
    />
    <source media={deskMinWidth} srcset="Mountain_view_in_Robson_valley.webp" />
    <img src="Mountain_view_in_Robson_valley.webp" alt="background" />
  </picture>
</div>

<div class="siteroot">
  <header>
    <Nav {segment} />
  </header>
  <main>
    <div class="title">
      <h1>
        {utils.firstLetterUpper(segment === undefined ? "Home" : segment)}
      </h1>
    </div>
    <div class="bg-blur">
      <div class="bg-whitesoft mainwrap"><slot /></div>
    </div>
  </main>
</div>

<style>
  .background {
    position: absolute;
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
  @media only screen and (min-width: 800px) {
    .siteroot {
      flex-direction: row;
    }
  }
  header {
    flex: 0 1 300px;
    padding-top: 60px;
  }
  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
    padding: 0 5em;
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
  .mainwrap {
    min-width: 600px;
    max-width: 1000px;
    padding: 4em;
  }
</style>
