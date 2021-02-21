<script>
  export let segment;
</script>

<nav class="bg-blur">
  <ul class="bg-whitesoft">
    <li aria-current={segment === undefined ? "page" : undefined}>
      <div />
      <a href=".">home</a>
    </li>
    <li aria-current={segment === "books" ? "page" : undefined}>
      <div />
      <a href="books">books & notes</a>
    </li>
    <li aria-current={segment === "projects" ? "page" : undefined}>
      <div />
      <a href="projects">projects</a>
    </li>
    <li aria-current={segment === "career" ? "page" : undefined}>
      <div />
      <a href="career">career</a>
    </li>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li aria-current={segment === "blog" ? "page" : undefined}>
      <div />
      <a rel="prefetch" href="blog">blog</a>
    </li>
  </ul>
</nav>

<style>
  nav {
    font-weight: 300;
    margin: auto;
    width: 200px;
  }

  ul {
    margin: 0;
    padding: 0.4em 0;
    display: flex;
    flex-direction: column;
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
  }
  li:hover {
    background: rgba(184, 210, 250, 0.5);
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

  a {
    text-decoration: none;
    font-size: 19px;
    color: black;
    padding: 0.4em 1em;
    display: block;
  }
</style>
