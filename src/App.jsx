import React,{useState} from 'react'

const App = () => {
  
const[heading,setHeading] = useState('')
const[note,setNote] = useState('')

const [task,setTask] = useState([])





function AddNote(e){
  e.preventDefault()

const copyTask = [...task];
console.log(task)

copyTask.push({heading,note})
setTask(copyTask)
  console.log(heading,note);
  setHeading('')
  setNote('')
  
}
  return(

    <div className=' bg-yellow-200  px-5 lg:h-1/2'>
      <form onSubmit={(e) => {
        AddNote(e)
      }} className='flex flex-col justify-between px-7 py-7' action="">

   <input 
  value={heading}
   onChange={(e) => {
    setHeading(e.target.value)
   
   }}
  className='bg-amber-400 mb-10 px-5 py-5 rounded-b-full' type="text" placeholder='Enter Notes Heading'/>
    
     
      <textarea 
      value={note}
   onChange={(e) => {
    setNote(e.target.value)

   }}className='bg-white border-none mb-10 px-5 py-5 ' placeholder='Add Your Note' name="" id=""></textarea>
     
    <div>
      <button 
      
      className='bg-pink-400 active:scale-110  active:bg-pink-600 cursor-pointer mb-10 px-5 py-5 w-40 rounded-b-full' type='submit'>Submit</button>
     
    </div>
     

    </form>
    <div className='bg-emerald-400 min-h-80 px-5 py-5'>
  <h1>Your Notes</h1>

  <div className='flex flex-wrap gap-5'>
    {task.map(function(elem) {
      return (
        <div  className='bg-white w-60 min-h-40 px-5 py-5 rounded-xl'>
          <h1 className='font-bold text-xl'>
            {elem.heading}
          </h1>

          <p>{elem.note}</p>
        </div>
      )
    })}
  </div>
</div>

  </div>
 
  )

}
export default App