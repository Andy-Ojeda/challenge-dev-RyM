import React from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import image from '../../assets/rymLOGO2.png';
import tituloRyM from '../../assets/tituloRyM.png';
import navBar from '../../assets/navBar.png';

function Nav() {


  return (
    <div className={style.contALL}>
        <img src={navBar} alt="fondo Nav" className={style.navImg} />
        <div className={style.contenedor}>
            <div className={style.logo}>
                <img className={style.image} src={image} alt="Logo"/>
            </div>
            
            <div className={style.contiene}>
                <div className={style.contTitulo}>
                    <img src={tituloRyM} alt="Rick and Morty" className={style.imgTitle} />
                </div>    
                <div className={style.contButtons}>
                    <Link to={'/'}>
                        <button className={style.button}>HOME</button>
                    </Link>
                    
                </div>
            </div>  
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Nav