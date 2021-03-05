<script>
  let visible = false
</script>

<button class="nav-btn open-btn" on:click={()=>visible=true}>
  <i class="fas fa-bars"></i>
</button>
<img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt="Logo" class="logo">
<p class="text">Mobile Navigation</p>
<div class="nav nav-black" class:visible>
  <nav class="nav nav-red" class:visible>
    <nav class="nav nav-white" class:visible>
      <button class="nav-btn close-btn" on:click={()=>visible=false}>
        <i class="fas fa-times"></i>
      </button>
      <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt="Logo" class="logo">
      <ul class="list">
        <li><a href="index.html">Teams</a></li>
        <li><a href="index.html">Locations</a></li>
        <li><a href="index.html">Life at Netflix</a></li>
        <li>
          <ul>
            <li><a href="index.html">Netflix culture memo</a></li>
            <li><a href="index.html">Work life balance</a></li>
            <li><a href="index.html">Inclusion &amp; diversity</a></li>
            <li><a href="index.html">Blog</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </nav>
</div>
