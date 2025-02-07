import React,{useState} from 'react';
import pupa from './pupa.gif'
import './index.scss';



function App() {
const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={()=>window.history.back()} id='back' className="open-modal-btn back">Назад</button>
      <button onClick={()=>setOpen(!open)} className="open-modal-btn">✨ Открыть окно</button>
      <Modal open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;

const Modal = ({open, setOpen}) =>(
  <div className={`overlay animated ${open ? 'show' : ''}`}>
      <div className="modal">
        <svg  onClick={()=>setOpen(!open)} height="200" viewBox="0 0 200 200" width="200">
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <img src={pupa} />
      </div>
  </div>
)

