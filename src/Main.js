import './style.css'
import img1 from './img/icon-1.png'
import img2 from './img/icon.png'
import img3 from './img/editpen.png'
import img4 from './img/delete.png'
import img5 from './img/icon-kvad.png'
function Main(){
    return(
<div className='divka'>
    
  <div className='div'>
     
    <h3 className='text-1'>TodoInput</h3>

     <div className='border-1'>
      <div className='div-2'>
        <div className='border-2'><img className='img-1' src={img1} alt=""/></div>
      <div className='border-3'><p className='todo'>New Todo</p></div>
      </div>
       <button className='button-1'>Add new task</button>
     </div>

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


   <div><p className='p-1'><strike>Learn React JS basics</strike></p></div>
   
      <div className='div-10'>

        <div>
          <img className='img-2 img-22' src={img2}/>
        </div>

        <div>
          <img  className='img-2 image'  src={img3}/>
        </div>

        <div>
          <img className='img-2'  src={img4}/>
        </div>

      </div>


      </div>


      <div className='border-5'>


<div><p className='text'>Practice React JS</p></div>

<div className='div-10'>

  <div>
    <img className='img-2'  src={img5}/>
  </div>

  <div>
    <img className='img-2 image'  src={img3}/>
  </div>

  <div>
    <img className='img-2'  src={img4}/>
  </div>

</div>


</div>


<div className='border-6'>


 <div><p className='text'>Learn Redux</p></div>

<div className='div-10'>

  <div>
    <img className='img-2'  src={img5}/>
  </div>

  <div>
    <img className='img-2 image'  src={img3}/>
  </div>

  <div>
    <img className='img-2'  src={img4}/>
  </div>

</div> 


</div>

<div className='border-7'>


<div><p className='text'>Code portfolio in React</p></div>

<div className='div-10'>

  <div>
    <img className='img-2'  src={img5}/>
  </div>

  <div>
    <img className='img-2 image'  src={img3}/>
  </div>

  <div>
    <img className='img-2'  src={img4}/>
  </div>

</div>


</div>

<div className='border-8'>


<div><p className='text'>Learn React Native</p></div>

<div className='div-10'>

  <div>
    <img className='img-2'  src={img5}/>
  </div>

  <div>
    <img className='img-2 image'  src={img3}/>
  </div>

  <div>
    <img className='img-2'  src={img4}/>
  </div>

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

</div>
    )
}

export default Main;