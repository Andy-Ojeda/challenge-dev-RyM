import React from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import image from '../../assets/rymLOGO2.png';
import tituloRyM from '../../assets/tituloRyM.png'

function Nav() {


  return (
    <div className={style.contenedor}>
          
          <div className={style.logo}>
            <img className={style.image} src={image} alt="Logo"/>
          </div>
          
          <div className={style.contiene}>
              <div className={style.contTitulo}>
                  <img src={tituloRyM} alt="Rick and Morty" />
              </div>    
              <div className={style.contButtons}>
                  <Link to={'/'}>
                    <button className={style.button}>HOME</button>
                  </Link>
                  {/* <Link to={'/about'}>
                    <button className={style.button}>ABOUT</button>
                  </Link> */}
                  
              </div>
          </div>  
          <div>
            
          </div>
    </div>
  )
}

export default Nav