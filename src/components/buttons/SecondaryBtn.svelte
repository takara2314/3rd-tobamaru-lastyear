<script>
  export let href = "/#";
  export let label;
</script>

<a href={href}>
  {label}
</a>

<style>
  a {
    color: var(--text-color);
    padding: 0.5rem 4rem;
    border-radius: 1rem;
    background-color: var(--secondary-btn-bg-color);
    box-shadow: 0 0.25rem 0.1rem var(--secondary-btn-shadow-color);
  }
</style>
