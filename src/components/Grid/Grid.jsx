import React from 'react';
import style from './Grid.module.css'

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';
import { useParams } from 'react-router-dom';



function Grid({}) {
    const show = useSelector((state)=>state.show);
    
    const cardsxPage = 10      //!  NUEVO!!
    const [page, setPage] = useState(1);
    const [pageTotal, setpageTotal] = useState(1);
    const [tenCharacters, setTenCharacters] = useState([]);    
    const [allCharacters, setAllCharacters] = useState([]);
    const [idOk, setIdOk] = useState(0);
    
    const {id} = useParams();

    
   
    useEffect(()=>{
        setIdOk(id);
        setAllCharacters(show);
        setPage(1)
        show.length===1 ? setpageTotal(1) : setpageTotal(Math.ceil(show.length / cardsxPage));
    },[show])


    useEffect(()=>{
        const startId = (page - 1) * cardsxPage;    // 0  11  21  31
        const endId = startId + cardsxPage;         // 10 20  30  40
        let displayCharacters = show;
        displayCharacters = displayCharacters.slice(startId, endId);
        
        if (!id) {
            setTenCharacters(displayCharacters);
        } else {

            if (id.includes('-')){
                let paramsArray = id.split("-").filter(Boolean);
                let cardsParams = [];
                
                for (let i = 0; i < paramsArray.length; i++) {
                    const filteredCharacters = show.filter((ch) => {
                       return ch.id === parseInt(paramsArray[i])
                    });
                    cardsParams = [...cardsParams, ...filteredCharacters];
                }

                console.log('cardsParams...', cardsParams);
                setTenCharacters(cardsParams);
            
            } else {
                const oneCharacter = allCharacters.filter((ch)=>{
                    return ch.id === parseInt(id);
                })
                setTenCharacters(oneCharacter);
            }
                
        }


    },[allCharacters, page, id]) 
    
    const handleButton = (event) =>{
        const button = event.target.name;
        if (button === 'izq') {
            page>1? setPage(page-1) : setPage(1); 
        } 

        else if (button === 'der') {
            page<25? setPage(page+1) : setPage(25); 
        }
    }
  
    const cardPush = ()=>{

    }


    return (
    <div>
        {/* <h3 style={{ color: "white" }}>Valor id: {idOk}</h3> */}
        {
            idOk<1&&(
                <div className={style.contButtons}>
                    <button name='izq' onClick={handleButton} disabled={page===1} >⏪IZQ</button>
                    <div className={style.contButLabel}>
                        <label className={style.cantidadPages}>Página {page} de {pageTotal}</label>
                    </div>
                    <button name='der' onClick={handleButton} disabled={page===Math.ceil(allCharacters.length / cardsxPage)} >DER⏩</button>
                </div>
            )
        }

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