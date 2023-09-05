import TareaForm from './TareaForm';
import '../stylesheet/Lista.css';
import { useState } from 'react';
import Tarea from './Tarea';

function Lista(){
  
  const [tareas, setTareas] = useState([]);

  const agregar = tarea => {
    if (tarea.texto.trim()) { /*valida que no esté vacía */
       /*quita espacios */
      tarea.texto =  tarea.texto.trim();
      const actual = [tarea, ...tareas]; /*agrega */
      console.log(actual);
      /*se agrega la tarea al principio 
      ... objetos individuales del objeto
      toma las tareas anteriores y las agrega con set */
      setTareas(actual);
    }
  };

  const eliminar = id => {
    const actual = tareas.filter(tarea => tarea.id !== id);
    setTareas(actual);
  };

  const terminar = id => {
    const actual = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.comp = !tarea.comp;
      }
      return tarea;
    });
    setTareas(actual);
  };

  return(
    /*un componente no puede tener dos elementos - 2 div
    <> fragmentos */
    <>
      <TareaForm onSubmit={agregar}/>
      <div className='lista'>
        {
          /*renderizar lista de componentes 
          va a tomar el objeto tarea y va a crear un componente*/
          tareas.map((tarea) => 
            <Tarea 
              key={tarea.id} /*identifica los elementos de la lista
              hay que agregar key a react - es comun - sino error*/
              id={tarea.id}
              texto={tarea.texto}
              comp={tarea.comp}
              terminar={terminar}
              eliminar={eliminar}
            />
          )
        }
      </div>    
    </>
  );
}

export default Lista;