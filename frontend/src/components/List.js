import React from 'react'

const List = ({ lists, funkce }) => {
    //let ldsa = lists[0].datum
    //console.log(ldsa.substring(0,10))

    const getTime = (string) => {
        let time = string.substring(11, 16)
        //console.log(time)
        return time
    }
    const getDate = (string) => {
        let date = string.substring(0, 10)
        //console.log(date)
        return date
    }
    return (
        <>
          {lists.map((list) => (
          <div key={list.id_sez} className="List" >
              <h2>{list.id_sez}</h2>
              <h4><sup>{getTime(list.datum)} <br /> {getDate(list.datum)}</sup></h4>
              <button onClick={() => {funkce(list.id_sez)}}>Show</button>
              </div>))}  
        </>
    )
}

export default List
