import React from 'react'
import './SelectedPokemon.css'

const Modal = ({onClick, id, name, image, type,height, weight, stats, statsName}) => {
  return (
    <div className='select-Poke'>
       <div className='close-select-Poke' onClick={onClick} >X</div>
       <div className='select-Poke-image'>
           <img src={image} alt={name} />
       </div> 
       <div className='select-Poke-detail'>
          <div className='stat-container-title'>
               <img src={image} alt='PokemonImage' className='image-title' />
               <p >No. {id}</p>
               <p>{name}</p>
          </div> 
          <div className='stat-container-details'>
               <div className='stats-left'>
                    <p>Type</p>
                    <p>Height</p>
                    <p>Weight</p>
               </div>
               <div className='stats-right'>
                    <p>{type}</p>
                    <p>{height}</p>
                    <p>{weight}</p>
                </div>
          </div>
          <div className='base-stats'>
               <div>
                    {statsName.map((stats)=>(
                        <p className='stats'>{stats}</p>
                      ))}
               </div>
               <div>
                    {stats.map((stats)=>(
                        <p className='stats'>{stats}</p>
                    ))}
                </div>
          </div>
       </div>
    </div>
  )
}

export default Modal
