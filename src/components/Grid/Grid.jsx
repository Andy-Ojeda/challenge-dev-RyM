import React from 'react';
import style from './Grid.module.css'

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';

// import { search_all } from '../../redux/actions/actions';
// // import { Dispatch } from 'react';

function Grid({}) {

    const nativeDB = useSelector((state)=>state.nativeDB);
    const show = useSelector((state)=>state.show);
    const order = useSelector((state)=>state.order);

    const cardsxPage = 10      //!  NUEVO!!
    const [page, setPage] = useState(1);
    const [pageTotal, setpageTotal] = useState(1);
    const [tenCharacters, setTenCharacters] = useState([]);    
    const [allCharacters, setAllCharacters] = useState([]);
    


    useEffect(()=>{
        setAllCharacters(show);
        setPage(1)
        show.length===1 ? setpageTotal(1) : setpageTotal(Math.ceil(show.length / cardsxPage));
    },[show])


    useEffect(()=>{
        const startId = (page - 1) * cardsxPage;    // 0  11  21  31
        const endId = startId + cardsxPage;         // 10 20  30  40
        let displayCountries = show;

        console.log('Grid - ORDER VALUE: ', order.value)
        

        if (order.value === 'order') {
            console.log('SHOW', show[0].name);
            console.log('NATIVE', nativeDB[0].name)
            displayCountries = nativeDB;
        }
        else if (order.value === 'descendente') {
            displayCountries = displayCountries.sort((a,b)=> b.name.localeCompare(a.name));
        }
        else if (order.value === 'ascendente') {
            displayCountries = displayCountries.sort((a,b)=> a.name.localeCompare(b.name));
        }
        else if (order.value === 'poblacion_asc') {
            displayCountries = displayCountries.sort((a, b) => a.population - b.population);
        } 
        else if (order.value === 'poblacion_desc') {
            displayCountries = displayCountries.sort((a, b) => b.population - a.population);
        }
        
        displayCountries = displayCountries.slice(startId, endId);
        
        setTenCharacters(displayCountries);

    },[allCharacters, page, order])


    const handleButton = (event) =>{
        const button = event.target.name;
        if (button === 'izq') {
            page>1? setPage(page-1) : setPage(1); 
        } 

        else if (button === 'der') {
            page<25? setPage(page+1) : setPage(25); 
        }
    }

  
    return (
    <div>
        <div className={style.contButtons}>
            <button name='izq' onClick={handleButton} disabled={page===1} >⏪IZQ</button>
            <label className={style.cantidadPages}>Página {page} de {pageTotal}</label>
            <button name='der' onClick={handleButton} disabled={page===Math.ceil(allCharacters.length / cardsxPage)} >DER⏩</button>
        </div>
        <div className={style.contGrid}>
            
            {       //* Si la cantidad de cartas a mostrar es 1, cambio el className
                tenCharacters.length > 0 && tenCharacters.length < 5 ? (
                    <div className={style.centeredCard}>
                        {tenCharacters.map((tenC) => (
                            <div className={style.cardShow}>
                                <Card key={tenC.id} character={tenC} />
                            </div>
                        ))}
                    </div>
                ) : ""
            }
            {
                tenCharacters.length > 4 ? (
                    <div className={style.grid}>
                        {tenCharacters.map((tenC) => (
                            <Card key={tenC.id} character={tenC} className={style.cardShow2} />
                        ))}
                    </div>
                ) : ''
            }
                        
        </div>
    
    </div>
  )
}

export default Grid