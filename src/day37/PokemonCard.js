function PokemonCard({pokemon, colors, main_types}) {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const id = pokemon.id.toString().padStart(3)
  const poke_types = pokemon.types.map(type => type.type.name)
  const type = main_types.find(type => poke_types.indexOf(type) > -1)

  return (
    <div className="pokemon" style={{backgroundColor: colors[type]}}>
      <div className="img-container">
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt=""
        />
      </div>
      <div className="info">
        <span className="number">#{id}</span>
        <h3 className="name">{name}</h3>
        <small className="type">Type: <span>{type}</span></small>
      </div>
    </div>
  )
}

export default PokemonCard