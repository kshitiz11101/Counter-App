import { Message } from "../Components/Message"
import {Button} from "../Components/Button"
import { useState } from "react";
export const Counterpage=()=>{
    console.log('Counter fn call');
// Hook (State)
const [count,setCount]=useState(0);  // setCount will change the state
// useState();
    // let count=0;
    const UpdateCount=(val)=>{
        if(val==="+"){
           setCount(count+1);  //state change
        }
        else{
            setCount(count-1);  // state change
        
        }
        console.log("Count is ",count);
        
    }
return(<div className='container'>
    <Message classname='alert alert-danger' msg="Counter App"/>
    <Message  value={count} classname='alert alert-success' msg="Counter Value is"/>
    <center>
    <Button fn={UpdateCount} val="+" classname='btn btn-success me-3' />
    <Button fn={UpdateCount} val="-" classname='btn btn-danger' />
    </center>

    
</div>
)
}