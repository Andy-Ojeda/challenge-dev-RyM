import React from 'react';
import style from './Searchbar.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { search, search_all, reset_all } from '../../redux/actions/actions';


function Searchbar() {
    
    const show = useSelector((state)=>state.show);  //Estado global SHOW
    
  
    const [textBox, setTextBox] = useState("");
    const [axiosDB, setAxiosDB] = useState([]);
    
    const [selectedOption, setSelectedOption] = useState('country');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleButton = (event)=> {
      const buttonName = event.target.name;
      
      switch (buttonName) {
        case 'All':
          dispatch(search_all());  
          dispatch(reset_all());
        break;
        case 'Search':
            if (!textBox) {
              console.log('Button pusheado, pero cuadro de texto VACÍO!!')
            } else {
              
              dispatch(search(textBox)); //! Envío el valor del "textBox"
              setTextBox('');
            }
        break;
            
      }
    }
    
    useEffect(()=>{
        console.log('SearchBAR - SHOW...', show);
      async function fetchData(){
        try {
        //   const {data} = await axios.get('https://rickandmortyapi.com/api/character?page=1'); //? Traigo todo de mi DB
        //   console.log('SearchBAR - dataAxios...', data.results);
        //   setAxiosDB(data.results);
          setAxiosDB(show);
          
        } catch (error) {
          console.log('Error en SEARCH-BAR...', error);
        }
      }  
      fetchData();
    }, [])


    const handleSelect = async (event) =>{
      const selectedValue = event.target.value;
      selectedValue.toLowerCase();
      try {
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${selectedValue}`)
        console.log('Search-BAR DATA ES...', data);
        const dato = data.id;
        // const dato1 = dato.toLowerCase();
        navigate(`/${dato}`);
      } catch (error) {
        console.log('ERROR en SEARCH-BAR!!', error);
      }
    
    }


  return (
    <div className={style.contenedor}>
        
        <div className={style.contSearch}>
          <input type='text' value={textBox}  className={style.input} pattern="\d+" placeholder='Search by Name' onChange={(e)=>setTextBox(e.target.value)} />  {/* // Con handleChange incorporado ;) */}
          <input type="button" value="Search" className={style.button} name='Search' onClick={handleButton} />
          <input type="button" value="All / Reset" className={style.button} name='All' onClick={handleButton} />
        </div>

        <select className={style.selectCountry} name="selectCharacter" defaultValue="character" onChange={handleSelect}>
            <option value="character">Select your Character...</option>


             <optgroup className={style.labelContinent} label="Page 1">
              {
                axiosDB.length > 0 ? (
                  axiosDB
                    .map((e, id) => (
                      <option key={e.id} value={e.id}>{e.name}</option>))
                )
                : (
                    <option value='cargando'>cargando...</option>  
                  )
              }
            </optgroup>
            {/*<optgroup label="NORTH AMERICA">
              {
                axiosDB.length > 0 ? (
                  axiosDB
                    .filter((e) => e.continent === 'North America')
                    .map((e) => (
                      <option key={e.idPais} value={e.idPais}>{e.name}</option>))
                )
                : (
                    <option value='cargando'>cargando...</option>  
                  )
              }
            </optgroup>
            <optgroup label="SOUTH AMERICA">
              {
                axiosDB.length > 0 ? (
                  axiosDB
                    .filter((e) => e.continent === 'South America')
                    .map((e) => (
                      <option key={e.idPais} value={e.idPais}>{e.name}</option>))
                )
                : (
                    <option value='cargando'>cargando...</option>  
                  )
              }
            </optgroup>
            <optgroup label="EUROPE">
              {
                axiosDB.length > 0 ? (
                  axiosDB
                    .filter((e) => e.continent === 'Europe')
                    .map((e) => (
                      <option key={e.idPais} value={e.idPais}>{e.name}</option>))
                )
                : (
                    <option value='cargando'>cargando...</option>  
                  )
              }
            </optgroup>
            <optgroup label="AFRICA">
              {
                axiosDB.length > 0 ? (
                  axiosDB
                    .filter((e) => e.continent === 'Africa')
                    .map((e) => (
                      <option key={e.idPais} value={e.idPais}>{e.name}</option>))
                )
                : (
                    <option value='cargando'>cargando...</option>  
                  )
              }
            </optgroup>
            <optgroup label="OCEANIA">
              {
                axiosDB.length > 0 ? (
                  axiosDB
                    .filter((e) => e.continent === 'Oceania')
                    .map((e) => (
                      <option key={e.idPais} value={e.idPais}>{e.name}</option>))
                )
                : (
                    <option value='cargando'>cargando...</option>  
                  )
              }
            </optgroup>
             */}
        </select>
    
    </div>
  )
}

export default Searchbar;