import React from 'react'

const NamesList = (props) => {
    let returnedList = props.listOfNames.map((element) => {
        return <p>{element}</p>
     });
     return(
             <ol>{returnedList}</ol>
     )
 }
  
export default NamesList;