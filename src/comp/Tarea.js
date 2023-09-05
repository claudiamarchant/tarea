import '../stylesheet/Tarea.css';
import { AiTwotoneFire } from "react-icons/ai";
/*son componentes de react por lo tanto se ocupan igual 
<AiTwotoneFire className='icono'/> 
se pueden pasar className para que se asigne la misma clase
*/

function Tarea({ id, texto, comp, terminar, eliminar }){
  return (
    <div className={comp ? 'cont-tarea comp' : 'cont-tarea'}>
      <div className='texto'
       onClick={() => terminar(id)}>
        {texto}
      </div>
      <div className='cont-icono'
       onClick={() => eliminar(id)}>
        <AiTwotoneFire className='icono'/> 
      </div>
    </div>
  );
}

export default Tarea;