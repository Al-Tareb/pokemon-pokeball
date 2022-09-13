import React, { useState } from 'react'
import SelectedPokemon from './SelectedPokemon';
import './PokemonCard.css'

const PokemonCard = ({id, name, image, type, weight, height, stats, statsName}) => {
    const [ isShown, setIsShown ] = useState(false);
    const [ selectedPokemonIsOpen, setSelectedPokemonIsOpen ]= useState(false);
    
    const openSelectedPokemon=()=>{
        setSelectedPokemonIsOpen(true);
    }
    const closeSelectedPokemon=()=>{
        setSelectedPokemonIsOpen(false);
    }

  return (
    <div className='container'>
      {isShown && (
       <div className='show'>
            <div className='stat-container-title'>
               <img src={image} alt='PokemonImage' className='image-title' />
               <p >No. {id}</p>
               <p>{name}</p>
            </div>
            <img src={image} alt={name} className='show-image'/>
            <div className='stat-container-details'>
                <div className='stats-left'>
                    <p>Type:</p>
                    <p>Height:</p>
                    <p>Weight:</p>
                </div>
                <div className='stats-right'>
                    <p>{type}</p>
                    <p>{height}</p>
                    <p>{weight}</p>
                </div>
            </div>
            <div className='base-stats'>
                <div>
                    {statsName.map((stats, index)=>(
                        <p className='stats' key={index}>{stats}</p>
                      ))}
                </div>
                <div>
                    {stats.map((stats, index)=>(
                        <p className='stats' key={index}>{stats}</p>
                    ))}
                </div>           
            </div>
       </div>
       )}
       <div className='right' onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=> setIsShown(false)}   onClick={openSelectedPokemon} >
          <img src={image} alt={name} />
          <p className='pokemon-no'>No. {id}</p>
          <p>{name}</p>
        </div>
        {selectedPokemonIsOpen && (
            <SelectedPokemon id={id} name={name} image={image} height={height} weight={weight} stats={stats} statsName={statsName} type={type} onClick={closeSelectedPokemon} />
        )}
    </div>
  )
}

export default PokemonCard
