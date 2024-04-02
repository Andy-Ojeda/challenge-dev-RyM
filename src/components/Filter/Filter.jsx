import React from 'react';
import style from './Filter.module.css';

import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { filter, filterActivity, search_all } from '../../redux/actions/actions';
// import { search_all } from '../../redux/actions/actions';

import axios from 'axios';

function Filter() {

  const [axiosDB, setAxiosDB] = useState([])
  const [activities, setActivities] = useState([]);


  const [selectedValue, setSelectedValue] = useState("filterCountry...");
  const [selectedActivity, setSelectedActivity] = useState("filterActivity...");
  const dispatch = useDispatch();

  const handlerSelect = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    value === 'filter'? dispatch(search_all()) : dispatch(filter(value));
  }
  
  const handlerActivity = (event) => {
    const activity = event.target.value;
    console.log('FILLL...', activity);
    setSelectedActivity(activity);
    activity === 'filterActivity'? dispatch(search_all()) : dispatch(filterActivity(activity));
  }





  useEffect(()=>{
    // async function fetchData(){
    //   try {
    //     const {data} = await axios.get('https://rickandmortyapi.com/api/character?page=2'); //? Traigo TODO TODO de mi DB
        
    //     setAxiosDB(data);
    //     //! Esto fue googleado!! \/
    //     const uniqueActivities = [...new Set(data.flatMap((e) => e.Activities.map((activity) => activity.name)))];

    //     setActivities(uniqueActivities);
        
    //   } catch (error) {
    //     window.alert('Error en FILTER...', error.message);
    //   }
    // }  
    // fetchData();
  }, [])




  return (
    
    <div className={style.contenedor}>
        
        {/* <select className={style.selectFilter} name="filter" value={selectedValue} onChange={handlerSelect}>
            <option value="filter">🌎Continent Filter...</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
        </select>
        
        <select className={style.selectFilter} name="filterActivity" value={selectedActivity} onChange={handlerActivity}>
            <option value="filterActivity">⚽Activity Filter...</option>
            
            {
              activities.length > 0 ? (
                activities.map((activity, index) => (
                    <option key={index} value={activity}>{activity}</option>))
              )
              : (
                  <option value='withoutActivities'>Without activities</option>  
                )
            }
            
        </select> */}
    </div>
  )
}

export default Filter