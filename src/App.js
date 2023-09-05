import './App.css';
import logo from './img/reward.png';
import Tarea from './comp/Tarea'; 
import './stylesheet/Tarea.css';
import './stylesheet/TareaForm.css';
import TareaForm from './comp/TareaForm'; 
import Lista from './comp/Lista';

function App() {
  return (
    <div className='tarea'>
     <div className='logo-cont'>
      <img src={logo}
       className='logo' alt='logo'
      />
     </div>
     <div className='lista-princ'>
      <h1>Tareas</h1>
      {/*<TareaForm />
      <Tarea texto='aprender react'/> */}
      <Lista />
     </div>
    </div>
  );
}

export default App;
