import React from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import image from '../../assets/rymLOGO.png';

function Nav() {


  return (
    <div className={style.contenedor}>
          
          <div className={style.logo}>
            <Link to={'/countries'}>
              {/* <button className={style.buttonLogo}> */}
                      <img className={style.image} src={image} alt="Logo"/>
              {/* </button> */}
            </Link>
          </div>
          
          <div className={style.contiene}>
              <div className={style.contTitulo}>
                  <label className={style.titulo}>Countries App</label>
              </div>    
              <div className={style.contButtons}>
                  {/* <Link to={'/countries'}>
                    <input type="button" value="INICIO" />
                  </Link> */}
                  
                  <Link to={'/countries/home'}>
                    {/* <div className={style.button}>
                      <input type="button" value="HOME" />
                    </div> */}
                    <button className={style.button}>HOME</button>
                  </Link>
                  <Link to={'/countries/about'}>
                    {/* <input type="button" value="ABOUT" /> */}
                    <button className={style.button}>ABOUT</button>
                  </Link>
                  <Link to={'/countries/form'}>
                    {/* <input type="button" value="NEW Activity" /> */}
                    <button className={style.button}>New Activity</button>
                  </Link>
              </div>
          </div>  
          <div>
            
          </div>
    </div>
  )
}

export default Nav