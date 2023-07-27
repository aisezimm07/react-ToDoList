import Main from "./Main";
import img2 from './img/icon.png'
import img3 from './img/editpen.png'
import img4 from './img/delete.png'
import img5 from './img/icon-kvad.png'
import axios from "axios";
function App(){
    
    return (
      < div className="div">
      <Main/>
      <h3 className='text-1'>TodoList</h3>
        <div className='div-3'>
          <div>
            <button className='button'>All</button>
          </div>
          <div>
            <button className='button'>Done</button>
          </div>
          <div>
            <button className='button'>Todo</button>
          </div>
        </div>

        <div className='border-4'>
          <p className='p-1'>Learn React JS basics</p>
          <div className='div-10'>
              <input type="checkbox" />
              <img className='img-2 image' src={img3} />
              <img className='img-2' src={img4} />
          </div>
        </div>


        <div className='div-100'>

          <div >
            <button className='last-b'>Delete done tasks</button>
          </div>

          <div>
            <button className='last-b'>Delete all tasks</button>
          </div>

        </div>
      </div>
  
    )
  }
  export default App;