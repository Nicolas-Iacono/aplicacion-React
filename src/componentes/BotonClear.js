import React from 'react';
import '../Hojas-d-estilo/BotonClear.css';

const BotonClear = (props) => (
    <div className='BotonClear' onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonClear;