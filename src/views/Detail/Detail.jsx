import React from 'react';
import style from './Detail.module.css';
import Searchbar from '../../components/Searchbar/Searchbar.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import Grid from '../../components/Grid/Grid.jsx';
import Nav from '../../components/Nav/Nav.jsx';

import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';  
import {search_all} from '../../redux/actions/actions.js';



function Detail() {


    const show = useSelector((state)=>state.show); 
    



  return (
    <div className={style.contenedor}>
    <div className={style.contNav}>
      <Nav />
    </div>
    <div className={style.contSelects}>
        {/* <div className={style.contSearchBar}>
            <Searchbar />
        </div> */}

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

export default Detail