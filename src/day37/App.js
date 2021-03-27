import {useEffect, useState} from 'react'
import PokemonCard from './PokemonCard'

const pokemon_count = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}
const main_types = Object.keys(colors)

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    async function getAllPokemon() {
      const pokeCards = []
      for (let id=1; id <= pokemon_count; id++) {
        try {
          const url = `https://pokeapi.co/api/v2/pokemon/${id}`
          const res = await fetch(url)
          const card = await res.json()
          pokeCards.push(card)
        } catch (err) {
          console.error(err)
        }
      }
      return pokeCards
    }

    getAllPokemon().then(data => setCards(data))
  }, [])

  return (
    <>
      <h1>Pokedex</h1>
      <div className="poke-container" id="poke-container">
        {cards.map((card, idx) => (
          <PokemonCard
            key={idx}
            pokemon={card}
            colors={colors}
            main_types={main_types}
          />
        ))}
      </div>
    </>
  )
}

export default App
