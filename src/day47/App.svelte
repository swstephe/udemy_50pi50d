<script>
  import { onMount } from 'svelte'
  import testimonials from './testimonials.json'

  let idx = 0

  $: testimonial = testimonials[idx]

  function updateTestimonial() {
    idx++
    if (idx > testimonials.length - 1) {
      idx = 0
    }
  }

  onMount(() => setInterval(updateTestimonial, 10000))
</script>

<div class="testimonial-container">
  <div class="progress-bar"></div>
  <div class="fas fa-quote-right fa-quote"></div>
  <div class="fas fa-quote-left fa-quote"></div>
  <p class="testimonial">
    {testimonial.text}
  </p>
  <div class="user">
    <img src={testimonial.photo} alt="user" class="user-image">
    <div class="user-details">
      <h4 class="username">{testimonial.name}</h4>
      <p class="role">{testimonial.position}</p>
    </div>
  </div>
</div>
