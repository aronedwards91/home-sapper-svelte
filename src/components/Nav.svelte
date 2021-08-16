<script>
  export let segment;
</script>

<style>
  nav {
    --stronger-blue: rgba(184, 210, 250, 0.5);
    font-weight: 300;
    margin: auto;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: -5px;
    border: none;
  }
  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    position: relative;
    transition: background 0.3s ease-in-out;
    margin: 5px;
    background: rgba(184, 210, 250, 0.4);
  }
  li:hover {
    /* background: rgba(184, 210, 250, 0.5); */
    background: var(--stronger-blue);
  }

  a {
    text-decoration: none;
    font-size: 18px;
    color: black;
    padding: 0.2em 0.5em;
    display: block;
  }
  [aria-current] {
    border: 1px solid rgba(153, 182, 224, 0.7);
  }

  @media (min-width: 1100px) {
    nav {
      font-weight: 300;
      margin: auto;
      width: 200px;
      padding: 0;
    }
    ul {
      flex-direction: column;
      margin: 0;
      border-top: 0.4em solid var(--stronger-blue);
      border-bottom: 0.4em solid var(--stronger-blue);
    }

    li {
      margin: 0;
      background: none;
    }
    li div {
      width: 0.5em;
      position: absolute;
      left: 0;
      height: 100%;
    }

    [aria-current] div {
      background: rgb(126 163 220 / 80%);
    }
    [aria-current] {
      border: none;
    }
    a {
      font-size: 19px;
      padding: 0.4em 1em;
    }
  }
</style>

<nav class="bg-blur-desk">
  <ul class="bg-whitesoft-desk">
    <li aria-current={segment === undefined ? 'page' : undefined}>
      <div />
      <a href=".">Home</a>
    </li>
    <li aria-current={segment === 'books' ? 'page' : undefined}>
      <div />
      <a href="books">Books & Notes</a>
    </li>
    <li aria-current={segment === 'quotes' ? 'page' : undefined}>
      <div />
      <a href="quotes">Quotes</a>
    </li>
    <li aria-current={segment === 'projects' ? 'page' : undefined}>
      <div />
      <a href="projects">Projects</a>
    </li>
    <li aria-current={segment === 'career' ? 'page' : undefined}>
      <div />
      <a href="career">Career</a>
    </li>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li aria-current={segment === 'blog' ? 'page' : undefined}>
      <div />
      <a rel="prefetch" href="blog">Blog</a>
    </li>
  </ul>
</nav>
