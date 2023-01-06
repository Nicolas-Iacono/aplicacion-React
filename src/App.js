
import './App.css';
import freeCodeCampLogo from './img/free-logo.png';
import Boton from './componentes/Boton.js';
import Display from './componentes/Display.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input).toFixed(3));
    } else {
      alert ("ingrese un valor correcto");
    }

  };

  return (
    <div className="App">
      <div className='freeCodeCamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freeCodeCamp-logo'
        alt='Logo de freeCodeCamp' />
      </div>

      <div className='contenedor-calculadora'>
            <Display input={input}/>
            <div className='fila'>
              <Boton manejarClic={agregarInput}>7</Boton>
              <Boton manejarClic={agregarInput}>8</Boton>
              <Boton manejarClic={agregarInput}>9</Boton>
            <BotonClear manejarClear={()=>setInput('')}>C</BotonClear>
              
            </div>
            <div className='fila'>
              <Boton manejarClic={agregarInput}>4</Boton>
              <Boton manejarClic={agregarInput}>5</Boton>
              <Boton manejarClic={agregarInput}>6</Boton>
              <Boton manejarClic={agregarInput}>-</Boton>
            </div>        
            <div className='fila'>
              <Boton manejarClic={agregarInput}>1</Boton>
              <Boton manejarClic={agregarInput}>2</Boton>
              <Boton manejarClic={agregarInput}>3</Boton>
              <Boton manejarClic={agregarInput}>*</Boton>
            </div>
            <div className='fila'> 
              <Boton manejarClic={agregarInput}>0</Boton>  
              <Boton manejarClic={agregarInput}>.</Boton>
              <Boton manejarClic={agregarInput}>/</Boton>
              <Boton manejarClic={agregarInput}>+</Boton>

            </div>
            <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            
            </div> 
                
      </div>
    </div>
  );
}

export default App;
