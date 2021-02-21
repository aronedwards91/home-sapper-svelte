<script>
  import { ProjectList } from "../data/project";

  function cleanURL(url) {
    var notail = url;
    if (url.substring(url.length - 1, url.length) === "/") {
      notail = url.substring(0, url.length - 1);
    }

    return notail.replace("https://", "").replace("http://", "").trim();
  }
</script>

<h2>Software Projects</h2>

<ul>
  {#each ProjectList as item}
    <div class="text-align-left">
      <h4>{item.title}</h4>
      {#if item.link}
        <a href={item.link}>{cleanURL(item.link)}</a>
      {/if}
      <p>{item.text}</p>
    </div>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
  }
</style>
