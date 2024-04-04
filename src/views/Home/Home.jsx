import Searchbar from '../../components/Searchbar/Searchbar.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import Grid from '../../components/Grid/Grid.jsx';
import Nav from '../../components/Nav/Nav.jsx';

import style from './Home.module.css';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';   //? useSelector es para mostrar mi estadoGlobal
import {search_all} from '../../redux/actions/actions.js';



function Home() {
    const dispatch = useDispatch();
   
    const show = useSelector((state)=>state.show); 
    
    useEffect(()=> {
        dispatch(search_all()); 
        // console.log('Buscando todo!!')
        
    }, [])


    return (
    <div className={style.contenedor}>
            <div className={style.contNav}>
              <Nav />
            </div>
            <div className={style.contSelects}>
                <div className={style.contSearchBar}>
                    <Searchbar />
                </div>

                <div className={style.contFilter}>
                    <Filter />
                </div>
            </div>
                
            <div className={style.contGrid}>
                <Grid show={show}/>
            </div>

    </div>
  )
}

export default Home