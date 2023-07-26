<script>
  export let href = "/#";
  export let label;
</script>

<a href={href}>
  {label}
</a>

<style>
  a {
    color: var(--primary-color);
    padding: 0.5rem 4rem;
    border-radius: 1rem;
    background-color: var(--primary-btn-bg-color);
    box-shadow: 0 0.25rem 0.1rem var(--primary-btn-shadow-color);
  }
</style>
