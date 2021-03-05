<script>
  export let showNav = false
</script>

<style>
  nav {
    position: fixed;
    bottom: 40px;
    left: 0;
    z-index: 100;
  }

  nav ul {
    list-style-type: none;
    padding-left: 30px;
  }

  nav ul li {
    text-transform: uppercase;
    color: #fff;
    margin: 40px 0;
    transform: translateX(-100%);
    transition: transform 0.4s ease-in;
  }

  nav ul li + li {
    margin-left: 15px;
    transform: translateX(-150%);
  }

  nav ul li + li + li {
    margin-left: 30px;
    transform: translateX(-200%);
  }

  nav ul li i {
    font-size: 20px;
    margin-right: 10px;
  }

  nav.show-nav li {
      transform: translateX(0);
      transition-delay: 0.3s;
  }
</style>

<nav class:show-nav={showNav}>
  <ul>
    <li><i class="fas fa-home"></i> Home</li>
    <li><i class="fas fa-user-alt"></i> About</li>
    <li><i class="fas fa-envelope"></i> Contact</li>
  </ul>
</nav>
