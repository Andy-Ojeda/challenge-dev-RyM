import React from 'react'
import style from './Card.module.css';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Card({character, activities}) {
  // console.log('DATOS>>> ', country)
  const {id} = useParams();

// console.log('CARD-ACTIVITIES...', activities)


  
  return (
    <div className= {id ? style.pepito : style.card}>
          <div className={id ? style.pepito1 : style.card2}>
              
          <div className={id? style.cont : style.cont1}>
              <div className= {id ? style.contenedor1 : style.contenedor}>
                  
                  <Link to={`/detail/${character.id}`}> 
                    
                    <img src={character.image} alt="ImagenBandera" />
                    <h3>{character.name}</h3>

                    {id && <h4>Specie: {character.species}</h4>}
                    
                    <h4>{`Status: ${character.status}`}</h4>
                    
                    {/* {id && <h4>Subregion: {country.subregion}</h4>}
                    {id? <h4>Population: {country.population}</h4> : <h5>-{country.population}-</h5>}
                    {id && <h4>Area: {country.area}</h4>} */}

                  </Link>
              
              </div>
              {/* <div className={style.contenedor2}>
                    {id && 
                      activities.map((act, id)=>(
                        <div key={id} className={style.activity}>
                            <h2>- Activity {id+1}-</h2>
                            <h4>Name: {act.name}</h4>
                            <h4>Difficulty: {act.difficulty}</h4>
                            <h4>Season: {act.season}</h4>
                            <br/>
                        </div>
                      ))
                    }
              </div> */}
        </div>
                    </div>
    </div>
  )
}

export default Card