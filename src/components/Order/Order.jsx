import React from 'react';
import style from './Order.module.css';
import { useState, useEffect } from 'react';
import { order as orderAction, search_all } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

function Order() {
    const dispatch = useDispatch();

    const reset = useSelector((state)=>state.reset);  
    const orderState = useSelector((state)=>state.order);  
  
  
    const [selectedValue, setSelectedValue] = useState('order');

    useEffect(()=>{
      setSelectedValue('order');
    }, [reset])
  
    useEffect(()=>{
      
        console.log('SelectedValue es...', selectedValue)
    //     if (selectedValue === 'order') {
    //       console.log('dispacho searchALL')
    //       dispatch(search_all())
    //     }
    //     else {
    //       console.log('dispacho ORDER')
    //       dispatch(orderAction(selectedValue));
    //     }
      
    }, [selectedValue])
    
    const handleSelect = (event)=> {
      const value = event.target.value;
      console.log('Order - ', value);
      setSelectedValue(value)

      dispatch(orderAction(value));
    }
  
      


  return (
    <div className={style.contenedor}>
        
        <select className={style.selectOrder} name="order" value={selectedValue} onChange={handleSelect}>
            <option value="order">Order...</option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
            <option value="poblacion_asc">Población Ascendente</option>
            <option value="poblacion_desc">Población Descendente</option>
 
        </select>
        <div>Order es...{orderState.value}</div>
            
    </div>
  )
}

export default Order