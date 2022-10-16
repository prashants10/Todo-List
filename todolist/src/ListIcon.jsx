import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { useState } from 'react';
const ListIcon = (props) => {
    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    }
    return (
        <div>
            <span onClick={cutIt}>
            <DeleteIcon className='deleteIcon'/>
            </span>
            <li style={{textDecoration:line?"line-through":"none"}}>{props.text}</li>
        </div>)
            
}


export default ListIcon;