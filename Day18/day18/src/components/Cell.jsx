import React from 'react'
const arr=[];
for (let i =0; i<64; i++){
    arr.push(i);
}


function square(i){
    if ((i + Math.floor(i / 8)) % 2=== 0) {
        return(
            <div className="white"> </div>
        );
    }
 else {
    return (
        <div className="black"> </div>
    );
}}
function Cell() {
  return arr.map(square);
}

export default Cell;
