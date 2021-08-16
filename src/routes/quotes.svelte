<script>
    import BookNote from "../components/BookNote.svelte";
    import { Quotes } from "../data/quotes";
</script>

<style>
    ul {
        list-style: none;
        padding-inline-start: 0;
    }
    li {
        border-bottom: 3px solid rgba(134, 159, 196, 0.7);
        margin-bottom: 2em;
    }
    i {
        max-width: 600px;
        display: block;
        text-align: center;
        margin: 0 auto;
    }
</style>


<i>“Make your own Bible. Select and collect all the words and sentences that in
    all your readings have been to you like the blast of a trumpet.”</i>
<br />
<b>Ralph Waldo Emerson</b>

<ul>
    {#each Quotes as category}
        <li>
            <div class="text-align-left">
                <h3>{category.title}</h3>
                {#if category.notes}
                    <BookNote book={category} />
                {/if}
            </div>
        </li>
    {/each}
</ul>
