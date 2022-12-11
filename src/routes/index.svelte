<script>
</script>

<svelte:head>
  <meta name="Description" content="Personal Home page for me, Aron" />
</svelte:head>

<h2>Welcome</h2>

<div class="text-align-left">
  <p>
    Welcome 👋, to the homepage for me, Aron Edwards, a frontend web developer,
    I've been loving my career path in software since I started and am slowly
    honing my skills with a number of personal <a href="/projects"
      >side projects</a
    >. I'm mostly focusing on React, howver I'm bullish on svelte and hopeful it
    sees more enterprise adoption, as I've immensely enjoyed using with it.
  </p>

  <p>
    Currently gainfully empolyed with Lucera (@ BGC Cantor) in the Fintec space,
    though I am looking to build connections with Web developers in the
    Hertfordshire area to help out in commnunity projects.
  </p>
  <p>Aron Edwards</p>
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
