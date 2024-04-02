import React from 'react'
import style from './Card.module.css';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Card({country, activities}) {
  // console.log('DATOS>>> ', country)
  const {idPais} = useParams();

// console.log('CARD-ACTIVITIES...', activities)


  
  return (
    <div className= {idPais ? style.pepito : style.card}>
          <div className={idPais ? style.pepito1 : style.card2}>
              
          <div className={idPais? style.cont : style.cont1}>
              <div className= {idPais ? style.contenedor1 : style.contenedor}>
                  
                  <Link to={`/countries/detail/${country.idPais}`}> 
                    
                    <img src={country.flagImage} alt="ImagenBandera" />
                    <h3>{country.name}</h3>

                    {idPais && <h4>Capital: {country.capital}</h4>}
                    
                    <h4>{idPais? `Continent: ${country.continent}` : `(${country.continent})`}</h4>
                    
                    {idPais && <h4>Subregion: {country.subregion}</h4>}
                    {idPais? <h4>Population: {country.population}</h4> : <h5>-{country.population}-</h5>}
                    {idPais && <h4>Area: {country.area}</h4>}

                  </Link>
              
              </div>
              <div className={style.contenedor2}>
                    {idPais && 
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
              </div>
        </div>
                    </div>
    </div>
  )
}

export default Card