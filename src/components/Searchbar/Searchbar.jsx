import React from 'react';
import style from './Searchbar.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import { search, search_all, reset_all } from '../../redux/actions/actions';

import { filter } from '../../redux/actions/actions';





function Searchbar() {

    const dispatch = useDispatch();

    const show = useSelector((state)=>state.show);  //Estado global SHOW
    // console.log('supuestamente leo ')
  
    const [textBox, setTextBox] = useState("");
    const [axiosDB, setAxiosDB] = useState([]);     //show se copia en "axiosDB"
    
    const [status, setStatus] = useState([]);
    const [species, setSpecies] = useState([]);
    const [gender, setGender] = useState([]);

    //!------------------------------------------------------------------------------------
    //?------------------------------------------------------------------------------------
    
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [speciesFilter, setSpeciesFilter] = useState('all');
    const [genderFilter, setGenderFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    
    
    useEffect(() => {
        // Filtrar personajes cuando cambien los filtros
        const filtered = characters.filter(character => {
          if (speciesFilter !== 'all' && character.species !== speciesFilter) return false;
          if (genderFilter !== 'all' && character.gender !== genderFilter) return false;
          if (statusFilter !== 'all' && character.status !== statusFilter) return false;
          return true;
        });
       dispatch(filter(filtered));
        
    }, [speciesFilter, genderFilter, statusFilter, dispatch]);
    
    
    
    
    //?------------------------------------------------------------------------------------
    //!------------------------------------------------------------------------------------




    const navigate = useNavigate();

    const handleButton = (event)=> {
      const buttonName = event.target.name;
      const item = axiosDB;
      
      switch (buttonName) {
        case 'All':
            setCharacters(show);                //!-----------------------------------------------------
            setFilteredCharacters(show);        //?-----------------------------------------------------
            
            setSpeciesFilter('all');
            setGenderFilter('all');
            setStatusFilter('all');

        break;
        case 'Search':
            if (!textBox) {
                console.log('Button pusheado, pero cuadro de texto VACÍO!!')
            } else {
                const filtered = item.filter((i)=>{
                    return i.name.toLowerCase().includes(textBox.toLowerCase());
                });
                console.log('ALGO...!!', filtered);
            
                setTextBox('');

                if (filtered.length > 1){
                    let URLdata = "";
                    filtered.map((fil)=>{
                        URLdata = URLdata+`-${fil.id}`;
                    })

                    console.log('Variable URLdata...', URLdata);

                    navigate(`/${URLdata}`);
                    
                } else {
                    navigate(`/${filtered[0].id}`);
                    // console.log('escribir URL simple!')
                }


            }
        break;
            
      }
    }
    
    useEffect(()=>{
        // console.log('SearchBAR - SHOW...', show);
        try {
            setAxiosDB(show);
            
            setCharacters(show);                //!-----------------------------------------------------
            setFilteredCharacters(show);        //?-----------------------------------------------------
            
            const uniqueStatus = new Set(show.map(item => item.status));
            const uniqueStatusArray = [...uniqueStatus];
            setStatus(uniqueStatusArray);
            
            const uniqueSpecies = new Set(show.map(item => item.species));
            const uniqueSpeciesArray = [...uniqueSpecies];
            setSpecies(uniqueSpeciesArray);

            const uniqueGender = new Set(show.map(item => item.gender));
            const uniqueGenderArray = [...uniqueGender];
            setGender(uniqueGenderArray);

        } catch (error) {
          console.log('Error en SEARCH-BAR...', error);
        }
    }, [show])
    
    useEffect(()=>{
        console.log(...textBox);
    }, [textBox])


    const handleSelect = async (event) =>{
        const selectedValue = event.target.value;
        selectedValue.toLowerCase();

        try {
        navigate(`/${selectedValue}`);
        
        } catch (error) {
        console.log('Error en SearchBar', error);
        }
 
    }


  return (
    <div className={style.contenedor}>
        
        <div className={style.contSearch}>
            <div className={style.contInput}>
                <input type='text' value={textBox}  className={style.input} pattern="\d+" placeholder='Search character by Name' onChange={(e)=>setTextBox(e.target.value)} />  
                <input type="button" value="Search" className={style.button} name='Search' onClick={handleButton} />
            </div>
            
            <div className={style.contSelect}>
                {/* <label>Explore names...</label> */}
                <div className={style.contSel}>
                    <select className={style.selectCountry} name="selectCharacter" defaultValue="character" onChange={handleSelect}>
                        <option value="character">...or search for them in this list</option>


                        <optgroup className={style.labelContinent} label="Names - (id)...">
                        {
                            axiosDB.length > 0 ? (
                            axiosDB
                                .map((e, id) => (
                                <option key={e.id} value={e.id}>{e.name} - ({e.id})</option>))
                            )
                            : (
                                <option value='cargando'>cargando...</option>  
                            )
                        }
                        </optgroup>
                        
                    </select>
                </div>
            </div>
        </div>


        <div className={style.contFilter}>
            <div className={style.contSelect2}>
                <label>Status:</label>
                <select className={style.selectSSG} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                    <option value="status">Select the status...</option>
                    <optgroup className={style.labelContinent} label="Status...">
                    <option value="all">All</option>
                    {
                    status.length ? (
                        
                        status.map((e) => (
                            <option key={e.id} value={e.id}>{e}</option>
                        ))
                    )
                    : (
                        <option value='cargando'>cargando...</option>  
                    )
                    }
                    </optgroup>
                </select>
            </div>
                        
            <div className={style.contSelect2}>
                <label>Species:</label>
                <select className={style.selectSSG} value={speciesFilter} onChange={e => setSpeciesFilter(e.target.value)}>
                    <option value="species">Select species...</option>
                    <optgroup className={style.labelContinent} label="Species...">
                    <option value="all">All</option>
                    {
                    species.length ? (
                        species.map((s) => (
                            <option key={s.id} value={s.id}>{s}</option>
                        ))
                    )
                    : (
                        <option value='cargando'>cargando...</option>  
                    )
                    }
                    </optgroup>
                </select>
            </div>
            
            <div className={style.contSelect2}>
                <label>Gender:</label>
                <select className={style.selectSSG} value={genderFilter} onChange={e => setGenderFilter(e.target.value)}>
                    <option value="gender">Select gender...</option>
                    <optgroup className={style.labelContinent} label="Gender...">
                    <option value="all">All</option>
                    {
                    gender.length ? (
                        gender.map((g) => (
                            <option key={g.id} value={g.id}>{g}</option>
                        ))
                    )
                    : (
                        <option value='cargando'>cargando...</option>  
                    )
                    }
                    </optgroup>
                </select>
            </div>
            <div className={style.contReset}>
                <input type="button" value="All / Reset" className={style.button2} name='All' onClick={handleButton} />
            </div>
            
                    

                        
        </div>
    </div>
  )
}

export default Searchbar;