import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
const TodoList = () => {
    const [num, setNum] = useState(0);
    // const [num2, setNum2] = useState();
    const incNum = () => {
        let newNum = num + 1;
        setNum(newNum)
    }

    const decNum = () => {
        if (num === 0) {
            window.alert("Sorry limit is reached");
        } else {   
            let Num2 = num - 1;
            setNum(Num2)
        }
    }

    return (
        <div className='main_div'>
            <div className='center_div'>
                <h1>{num}</h1>
                <div className='btn_div'>
                    <Button className='MuiButton-text' onClick={incNum}>
                        <AddIcon />
                    </Button>
                    <Tooltip title="Delete">
                        <Button onClick={decNum}>
                            <RemoveIcon />
                        </Button>
                    </Tooltip>
                </div>
            </div>
         </div>
    )
}
export default TodoList; 