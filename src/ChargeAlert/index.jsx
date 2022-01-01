import React from 'react';
import withStorageListener from './withStorageListener';

function ChargeAlert({show,toggleshow}) {
    if (show) {
        return  (
        <div>
        
        <p>Hubo cambios!</p> 
     <button onClick={()=> toggleshow(false)}> volver a cargar infomacion</button>
        </div>
        
        )   
    }else{
        return null;
    }
          

}
const ChangeAlertwithStorageListener= withStorageListener(ChargeAlert);
export default ChangeAlertwithStorageListener;