 import React,{useState} from 'react';


function withStorageListener(wrappedComponent) {
    return function WrappedComponentWithStorage(props) {
    const [storageChange, setStorageChange] = useState(false); 
       
    window.addEventListener('storage',(change)=>{
        if(change.key === 'TODOS_V1'){
            console.log('Hubo cambios ')
            setStorageChange(true);
        }
    })
const toggleshow=()=>{
    setStorageChange(false)
    props.sincronize();
}

    return (<wrappedComponent 
        show={storageChange} 
        toggleshow={toggleshow}
        />)
       }
    
}

export default withStorageListener; 