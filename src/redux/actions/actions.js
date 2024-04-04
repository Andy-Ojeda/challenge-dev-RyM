import {FILTER, FILTERACTIVITY, ORDER, SEARCH, SEARCH_ALL, RESET, INICIANDO} from './action_types';
import axios from 'axios';

// Desde acá despacho todas las funciones a realizar.

export const inicioApp = (value) =>{
    return async (dispatch) => {
        try {
            return dispatch({type:INICIANDO, payload: value}); 
            
        } catch (error) {
            window.alert('ERROR en action - INICIO_APP...', error.message);
        }
         
    }
}


export const filter = (value) =>{
    return async (dispatch) => {
        console.log('---------------------------');
        console.log('Esto es un Filter', value);
        try {
            // const {data} = await axios.get('http://localhost:3001/countries/home');
            // const countries = data.filter((country)=>{
            //     return country.continent === value;
            // })
            
           return dispatch({type:FILTER, payload: value}) 
            
        } catch (error) {
            window.alert('Error en action - FILTER...', error.message);
        }
    }

}

export const filterActivity = (value) =>{
    return async (dispatch) => {

        console.log('Esto es un FilterActivity', value);
        try {
            const {data} = await axios.get('http://localhost:3001/countries/getall'); //? Traigo TODO TODO de mi DB

            console.log("action-Fill", value)
            console.log('DAta...', data)
            // console.log("action-", countries1[0].Activities[0].name)

                        
            const countries1 = data.filter((country1, index)=>{
                // return country1.Activities[index]?.name === value;
                return country1.Activities.some((activity) => activity.name === value);
            })



            console.log('COUNTRIES1:: ', countries1)
            // console.log('COUNTRIES SON... ', countries1)
            return dispatch({type:FILTERACTIVITY, payload: countries1}) 
        } catch (error) {
            window.alert('Error en actions.js - FILTER ACTIVITIES...', error.message);
        }
    }

}

export const order = (value) =>{
    return async (dispatch) => {
        try {
            console.log('Action - ', value);
            return dispatch({type:ORDER, payload:{value}})
        } catch (error) {
            window.alert('Error en action - ORDER...', error.message);
        }
    }
}

export const search = (textBox) =>{
    return async (dispatch) => {
        try {
            const {data} = await axios.get('http://localhost:3001/countries/home'); //? Traigo todo de mi DB
            const oneCountry = data.find((country)=>{
                return country.name === textBox;
            })

            return dispatch({type:SEARCH, payload: oneCountry}) 
        } catch (error) {
            window.alert('Error en action - SEARCH... ', error.message);
        }
    }
}

    export const searchID = (idParam) =>{
        return async (dispatch) => {
            try {
                const {data} = await axios.get('http://localhost:3001/countries/home'); //? Traigo todo de mi DB
                const oneCountry = data.find((country)=>{

                    return country.idPais === idParam;
                })
                // console.log('SSSSSSSSSSSSSSSS', oneCountry)
                return dispatch({type:SEARCH, payload: oneCountry}) 
            } catch (error) {
                window.alert('Error en action - SEARCH... ', error.message);
            }
        }
    }

export const search_all = () =>{
    return async (dispatch) => {
        
        try {
            const dataALL = [];
            console.log('Estoy en action-SEARCH-ALL!!!!!')       
        
            for (let i=1 ; i<43 ; i++){
                const {data} = await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`); //? Traigo todo de cada Página
                data.results.map((e)=>{
                    dataALL.push(e);
                })
            }

            // console.log('dataALL...', dataALL);
            return dispatch({type: SEARCH_ALL, payload: dataALL});           //? Lo despacho a data (GLOBAL)

        } catch (error) {
            window.alert('Error en action - SEARCH_ALL... ', error.message);
        }
    } 
}

export const reset_all = () =>{
    return async (dispatch) => {
        try {
            return dispatch({type: RESET});
        } catch (error) {
            window.alert('Error en action - RESET... ', error.message);
            
        }

    }
}
