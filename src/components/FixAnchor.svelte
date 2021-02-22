<script>
  import { onMount } from "svelte";

  onMount(() => {
    document.querySelectorAll("a").forEach((a) => {
      if (!a.hash || !document.querySelectorAll(a.hash).length) return;

      a.href = window.location + a.hash;
    });
  });
</script>
