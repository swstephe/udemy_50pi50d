<script>
  import { onMount } from 'svelte'

  let header = '&nbsp;'
  let title = ''
  let excerpt = ''
  let profile_img = '&nbsp;'
  let name = ''
  let date = ''
  let animated = true

  function getData() {
    header = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">'
    title = 'Lorem ipsum dolor sit amet.'
    excerpt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, quo?'
    profile_img = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name = 'John Doe'
    date = 'Oct 08, 2020'
    animated = false
  }

  onMount(() => {
    setTimeout(getData, 2500)
  })
</script>

<div class="card">
  <div class="card-header animated-bg" id="header">
    &nbsp;{@html header}
  </div>
  <div class="card-content">
    <h3 class="card-title animated-bg animated-bg-text" id="title">
      &nbsp;{title}
    </h3>
    <p class="card-excerpt" id="excerpt">
      &nbsp;{excerpt}
      <span class:animated-bg={animated} class:animated-bg-text={animated}>&nbsp;</span>
      <span class:animated-bg={animated} class:animated-bg-text={animated}>&nbsp;</span>
      <span class:animated-bg={animated} class:animated-bg-text={animated}>&nbsp;</span>
    </p>
    <div class="author">
      <div class="profile-img aniamted-bg" id="profile_img">
        {@html profile_img}
      </div>
      <div class="author-info">
        <strong class="animated-bg animated-bg-text" id="name">{name}</strong>
        <small class="animated-bg animated-bg-text" id="date">{date}</small>
      </div>
    </div>
  </div>
</div>
