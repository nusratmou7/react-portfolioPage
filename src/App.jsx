// import React, { useState } from 'react';





// const App=()=>{


// // let now = new Date().toLocaleTimeString()
// //  const [ctime,stime]= useState(now)

// // const utime=()=>{
// //    now = new Date().toLocaleTimeString()
// //   stime(now)
// // }
// // setInterval(utime,1000)



// /////////////////////////new event/////////////////////////////




// // const r='red'
// // const [bg,setbg]=useState(r)
// // const[name,setName]=useState('click me')


// // const bgChange=()=>{
// //    // console.log('clicked')
// //  let nbg='#34495e'b
// //  setbg(nbg)
// //  setName('mouuuuuuuuuuuuuuuu')
  
// // }
// // const bgBack=()=>{
// //    setbg(r)
// //    setName('wakeupp')
// // }

// /////////////////////////new from/////////////////////////////

// const[ctime,setTime]=useState({
//    fname:'',
//    lname:'',
//    email:'',
//    number:''
// })


// const input=(e)=>{
//    // console.log(e.target.value) 
//    // console.log(e.target.name)
// // const value=e.target.value
// // const name=e.target.name
// const{value,name}=e.target

// setTime((preValue)=>{
// return{
//    ...preValue,
//    [name]:value
// }
// // if(name==='fname'){
// //    return{
// //    fname:value,
// //    lname:preValue.lname,
// //    email:preValue.email,
// //    number:preValue.number
// //    }
// // }else if(name==='lname') {
// //       return{
// //       fname:preValue.fname,
// //       lname:value,
// //       email:preValue.email,
// //       number:preValue.number
// //       }
// // }else if(name==='email') {
// //    return{
// //    fname:preValue.fname,
// //    lname:preValue.lname,
// //    email:value,
// //    number:preValue.number
// //    }
// // }else if(name==='number') {
// //    return{
// //       fname:preValue.fname,
// //       lname:preValue.lname,
// //       email:preValue.email,
// //       number:value
// //    }
// // }
// })
// }

// const onSubmits=(event)=>{
//    event.preventDefault()
//   alert('ggggggggg')
// }






// return(
//  <>
//   {/* <h1>{ctime}</h1> */}
//  {/* <div style={{backgroundColor:bg}}>
//     <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
//  </div> */}

// <form onSubmit={onSubmits}>
// <div>
//    <h1>hello{ctime.fname}{ctime.lname}</h1>
//    <p>{ctime.email}{ctime.number}</p>
//    <input type='text' placeholder='enterr' name='fname'onChange={input} value={ctime.fname} />
//    <input type='text' placeholder='enterr' name='lname' onChange={input} value={ctime.lname} />
//    <input type='email' placeholder='enterr' name='email' onChange={input} value={ctime.email} autoComplete='off' />
//    <input type='number' placeholder='enterr' name='number' onChange={input} value={ctime.number} />
//    <button type='submit'>submit</button>
// </div>
// </form>
// </> 
                              
// )
// }
// export default App





import React from 'react';
import { useState } from 'react';

const App=()=>{

   const[cname,setName]=useState({
      fname:'',
      lname:'',
      email:'',
      number:''
   })
   const input=(e)=>{
      console.log(e.target.name)
      console.log(e.target.value)
const{name,value}=e.target

setName((preValue)=>{
   return{
   ...preValue,
   [name]:value
   }
})
   }
const onSubmits=(event)=>{
event.preventDefault();
alert('submitted')
}

return (
<>
<div>
   <form onSubmit={onSubmits} >
   <h1>from list<br/> {cname.fname} {cname.lname}</h1>
   <p>{cname.email} {cname.number} </p>
      <input type="text" placeholder='enter....' name='fname' onChange={input} value={cname.fname} /><br/>
      <input type="text" placeholder='enter....' name='lname' onChange={input} value={cname.lname} /><br/>
      <input type="email" placeholder='enter....' name='email' onChange={input} value={cname.email} /><br/>
      <input type="number" placeholder='enter....' name='number' onChange={input} value={cname.number} /><br/>
      <button type='submit'>click</button>
         </form>
</div>
</>


)
}

export default App