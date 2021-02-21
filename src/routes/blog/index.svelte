<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">
        <h4>{post.title}</h4>
        <p>{post.description}</p></a
      >
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    list-style: none;
    text-align: left;
  }
  li {
    margin-bottom: 1em;
    background: rgba(184, 210, 250, 0.5);
  }
  li:hover {
    background: rgba(129, 152, 187, 0.6);
  }
  a {
    text-decoration: none;
    padding: 1em;
    display: block;
  }
  p {
	  margin-bottom: 0;
  }
</style>
