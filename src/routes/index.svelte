<script>
</script>

<svelte:head>
  <meta name="Description" content="Personal Home page for me, Aron">
</svelte:head>

<h2>Welcome</h2>

<div class="text-align-left">
  <p>Welcome to my homepage, thanks for stopping by.</p>

  <p>
    I'm a keen website developer, though having only been developing for the
    past few years, after moving from the support end. To keep myself fresh and
    explore the frankly ridiculous number of frameworks available I've been
    rebuilding my website every year. This one was built with svelte/sapper, and the results have been great.
  </p>

  <p>
    This site mostly houses a short work history and some of the projects I've
    been playing around with since starting web development & programming, please reach out
    with any comments or advice as it's always welcome. Anyway, thanks for
    reading this far, all the best,
  </p>
  <p>Aron</p>
  <div class="item">
    <a href="https://www.linkedin.com/in/aronedwards/" target="_target"
      >linkedin.com/in/aronedwards/</a
    >
  </div>
  <div class="item">
    <a href="https://github.com/aronedwards91" target="_target"
      >github.com/aronedwards91</a
    >
  </div>
</div>

<style>
  div.item {
    margin-bottom: 1em;
    background: rgba(184, 210, 250, 0.5);
  }
  div.item:hover {
    background: rgba(129, 152, 187, 0.6);
  }
  div.item a {
    width: 100%;
    height: 100%;
    padding: 0.5em 1em;
    text-decoration: none;
    font-size: 16px;
    display: block;
  }
  @media (min-width: 800px) {
    div.item {
      width: 300px;
      margin-bottom: 0.5em;
    }
  div.item a {
    font-size: 20px;
  }
  }
</style>
