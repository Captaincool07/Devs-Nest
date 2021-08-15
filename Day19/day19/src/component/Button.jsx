import { useState } from "react"
// let count=0;
// function abc(){
//     return count+1
// }
const Bt = () =>{
    let [a,count] =useState(0);
    return(
        
        <div>
            <button className="button"  onClick={() =>{
                count(a+1)}}>
                {a}</button>
        </div>
    )
}
export default Bt;
