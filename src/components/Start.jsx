import React from 'react'

const Start = () => {
  //creating variable
  const myName = "Aphoo"
  //creating array of items
  const arrayOfItems = ['Mango','Orange','Banana','Watermelon','Apple','Pineapple'];
  //creating object
  const userData = {
    firstName: "Afolabi",
    age:20,
    gender:'male',
    school:"SQI"
  }
  //creating array of an object
  const allUsers = [
    {name:'david', age:12,gender:'male'},
    {name:'john', age:22,gender:'male'},
    {name:'joy', age:30,gender:'female'},
    {name:'deborah', age:25,gender:'female'}
  ];
  const mappingFunction = ()=> {
    arrayOfItems.map((value,index)=>(
        console.log(value)
    ))
  }
  return (
    <>
    {/* <Quiz/> */}
    <button className="text border rounded-full" onClick={mappingFunction}>Mapping Button</button>
     <div className="text">{myName}</div>
     <div className="text">{arrayOfItems.map((val,i) =>(
       <div>{i+1}. {val}</div>
     ))}</div>
     <div className="text">First Name: {userData.firstName}</div>
     <div className="text">Age: {userData.age}</div>
     <div className="text">Gender:{userData.gender}</div>
     <div className="text">School:{userData.school}</div>

     <table className="text border-collapse">
       <thead className="text">
        <th className="text px-10">First Name</th>
        <th className="text px-10">Age</th>
        <th className="text px-10">Gender</th>
       </thead>
       <tbody className="text">
         {allUsers.map((val, ind)=>(
           <tr className="text">
             <td className="text">{val.name}</td>
             <td className="text">{val.age}</td>
             <td className="text">{val.gender}</td>
           </tr>
         ))}
       </tbody>
     </table>
    </>
  )
}

export default Start
