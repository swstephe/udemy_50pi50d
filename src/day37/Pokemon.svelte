<script>
  import { onMount } from 'svelte'
  export let colors
  const main_types = Object.keys(colors)

  export let id
  let padId
  let type
  let name


  onMount(async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    padId = id.toString().padStart(3, '0')
    const poke_types = data.types.map(type => type.type.name)
    type = main_types.find(type => poke_types.indexOf(type) > -1)
    name = data.name[0].toUpperCase() + data.name.slice(1)
  })
</script>

<div class="pokemon" style="background-color: {colors[type]}">
  <div class="img-container">
    <img
      src="https://pokeres.bastionbot.org/images/pokemon/{id}.png"
      alt="{name}"
    >
  </div>
  <div class="info">
    <span class="number">#{padId}</span>
    <h3 class="name">{name}</h3>
    <small class="type">Type: <span>{type}</span></small>
  </div>
</div>
