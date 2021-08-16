<script>
  export let book;

  let notesText = "Notes:";
  if(book.notesText) {
    notesText = book.notesText;
  }
  let notesOpen = false;
  function notesClick() {
    console.log("2");
    notesOpen = !notesOpen;
  }

  let subNotesOpen = [];
  book.notes.forEach(() => {
    subNotesOpen.push(false);
  });

  function notesDrawerClick(index) {
    subNotesOpen[index] = !subNotesOpen[index];
  }
</script>

<div class="flex">
  <h5>{notesText}</h5>
  <button on:click={notesClick} class={notesOpen && "button-open"}>V</button>
</div>
<div class="{notesOpen ? 'note-drawer-open' : 'note-drawer-closed'} inner">
  {#each book.notes as note, index}
    <div class="flex">
      <h5>{note.title}</h5>
      <button
        on:click={() => notesDrawerClick(index)}
        class={subNotesOpen[index] && "button-open"}>V</button>
    </div>
    <div
      class="{subNotesOpen[index] ? 'note-drawer-open' : 'note-drawer-closed'} "
    >
      <p>{note.text}</p>
    </div>
  {/each}
</div>

<style>
  div.flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1em;
  }
  h5 {
    margin-bottom: 0;
  }
  button {
    cursor: pointer;
    width: 3em;
    height: 3em;
    flex: 0 0 3em;
    padding: 0.4em 0;
    border: none;
    background: rgba(134, 159, 196, 0.7);
    transition: transform 0.2s ease-in-out;
  }
  button:hover {
    background: rgba(134, 159, 196, 0.9);
  }
  button:focus,
  button:active {
    outline: none;
  }
  button.button-open {
    transform: rotate(180deg);
  }
  div.inner {
    border-right: 2px solid rgba(134, 159, 196, 0.7);
    margin-right: 1em;
    padding-right: 1em;
  }
  .note-drawer-open {
    display: block;
  }
  .note-drawer-closed {
    display: none;
  }
  p {
    white-space: pre-line;
  }
</style>
