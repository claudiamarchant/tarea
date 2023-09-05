import '../stylesheet/TareaForm.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TareaForm (props){

  const [input , setInput] = useState('');

  const cambio = e => {
    setInput(e.target.value); /*acceder valor */
  };

  const envio = e => {
    e.preventDefault(); /*no se vuelva a cargar */
    const tareaNueva = {
      id: uuidv4(), /*para generar id */
      texto: input,
      comp: false
    }

    props.onSubmit(tareaNueva); /*enviar formulario*/
  };

  return(
    <form className='tarea-form'
    onSubmit={envio}>
      <input className='input'
      type='text'
      placeholder='tarea'
      name='texto'
      onChange={cambio}
      />
      <button className='btn'>
        agregar tarea
      </button>
    </form>
  )
}

export default TareaForm;