<script>
  export let active = false
</script>

<style>
  .circle {
    background-color: #fff;
    color: #999;
    border-radius: 50%;
    height: 30px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--line-border-empty);
    transition: border.4s ease;
  }

  .circle.active {
    border-color: var(--line-border-fill);
  }
</style>

<div class="circle" class:active={active}>
  <slot/>
</div>
