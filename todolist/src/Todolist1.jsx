import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ListIcon from './ListIcon'
const Todolist1 = (props) => {
    const [item, setItem] = useState()
    const [newitem, setNewItem] = useState([]);
    
    const itemEvent = (event) => {
        setItem(event.target.value);
    }
    const listOfItems = (event) => {
        setNewItem((preValue) => {
            return [...preValue, item];
        });
        setItem("")
    }
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
              <input value={item} type="text" placeholder="Add Items"
              onChange={itemEvent}/>
        <Button className="newBtn" onClick={listOfItems}>
          <AddIcon />
        </Button>

        <br />
        <ol>
          {newitem.map((val,index)=>{
              return <ListIcon key={index} text={val} />  
            })}
        </ol>
      </div>
    </div>
  )
}

export default Todolist1
