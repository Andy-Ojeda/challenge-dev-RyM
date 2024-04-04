import {FILTER, FILTERACTIVITY, ORDER, SEARCH, SEARCH_ALL, RESET, INICIANDO} from './actions/action_types';

//*  ESTADOS GLOBALES
const initialState = {
    show:[],        //!  LO NUEVO!!!!!!!!!!!!!!
    order:'',
    reset: 0,
    nativeDB:[],
}


const reducer = (state = initialState, action) =>{
    switch(action.type){    
        case INICIANDO:
            console.log('Reducer - Iniciando...', action.payload)
            return {...state, nativeDB: action.payload};

        case SEARCH_ALL:     //? Si alguien me manda un type: SEARCHALL...
        // myCountries = action.payload
            console.log('Buscando todo (all)!!')
            return {...state, show: action.payload}; //? ...guardo en el estado Global
        
        case SEARCH:
            // console.log('PAYLOAD...', action.payload);
            return {...state, show: [action.payload]}; 
        
        case FILTER:
            return {...state, show: action.payload}
        
        case FILTERACTIVITY:
            return {...state, show: action.payload}
        
        case ORDER:
            console.log('Reducer - ', action.payload)
            return {...state, order: action.payload}
        
        case RESET:
            return {...state, reset: state.reset+1, order: 'order'}
            
        default:
            return state;
    }

};

export default reducer;
