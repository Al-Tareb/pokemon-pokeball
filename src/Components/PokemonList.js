import React, { useEffect, useState } from 'react'
import PokemonCard from "./PokemonCard";
import './PokemonList.css'

const PokeList = () => {
    const [ allPokemons, setAllPokemons ] =useState([]);  
    const [ loodData, setLoadData ] = useState("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")

    const getAllpokemons = async ()=>{
        const res = await fetch(loodData);
        const data = await res.json();
       
        function creatPokemonDetail(result){
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();
                console.log('Date for each Pokemon' , data)
                setAllPokemons(state=>{
                state=[...state,data]
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state;
            })
            });
        }
        creatPokemonDetail( data.results) 
        console.log('First Data' ,data.results)
    }

    useEffect (()=>{
        getAllpokemons();
    }, [loodData])


  return (
    <div className='main-container'>
       <div className='pokemon-container'>
              {
                allPokemons.map((pokemonStats, index)=>(
                    <PokemonCard
                    key = {index} 
                    id ={pokemonStats.id.toString().padStart(3, "0")}
                    image={pokemonStats.sprites.other["official-artwork"].front_default}
                    name={pokemonStats.name.replace(/^./, (str)=> str.toUpperCase())}
                    type={pokemonStats.types[0].type.name}
                    weight={pokemonStats.weight}
                    height={pokemonStats.height}
                    stats={pokemonStats.stats.map((stat)=> stat.base_stat).slice(0,3)}
                    statsName={pokemonStats.stats.map((stat)=> stat.stat.name).slice(0,3)}
                  />
                )  )}
       </div>
    </div>
  )
}

export default PokeList
