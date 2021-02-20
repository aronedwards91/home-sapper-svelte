<script>
  import Nav from "../components/Nav.svelte";
  import resp from "../utils/responsive";
  export let segment;

  var mobMaxWidth = "(max-width: " + resp.maxWidthMob + ")";
  var deskMinWidth = "(min-width: " + resp.minWidthTabDesk + ")";
</script>

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
    <slot />
  </main>
</div>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
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
  }
  @media only screen and (max-width: 799px) {
    .siteroot {
      flex-direction: column;
    }
  }
  header {
    flex: 0 1 300px;
    padding-top: 60px;
  }
</style>
