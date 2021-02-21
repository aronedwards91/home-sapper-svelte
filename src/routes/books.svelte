<script>
  import BookNote from "../components/BookNote.svelte";
  import { NonFictionBooks } from "../data//books";
</script>

<h2>Heavily Recommended Reading</h2>

<h4 class="mb">For some books I have added personal notes</h4>

<ul>
  {#each NonFictionBooks as book, index}
    <li>
      <div class="text-align-left">
        <h3>{book.title}</h3>
        <h5>{book.sub}</h5>
        <p>{book.text}</p>
        {#if book.notes}
          <BookNote {book} />
        {/if}
      </div>
    </li>
  {/each}
</ul>

<style>
  h4.mb {
    margin-bottom: 3em;
  }
  ul {
    list-style: none;
  }
  li {
    border-bottom: 3px solid rgba(134, 159, 196, 0.7);
    margin-bottom: 2em;
  }
</style>
