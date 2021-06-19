//Q1

function check_array(input){
    return input.constructor === Array 

}
console.log(check_array([1,2,3,4]));

//Q2

function Clone_array(a){
    const newArray = a.map(a => (a));
    return newArray
     }
    
    console.log(Clone_array([1,2,3,4,56,79]));
//Q3

first = (arr,n = 0)=>{
    if (n == 0){
        return arr[0]
    }
    if (n<0){
        return[]
    }
    return arr.slice(0,n)
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//Q4
myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join('+'))
console.log(myColor.join(','))
//Q5

function findMostFrequest(arr) {
    let compare = "";
    let mostFreq = "";
    
    arr.reduce((acc, val) => {
      if(val in acc){               // if key already exists
         acc[val]++;                // then increment it by 1
      }else{
         acc[val] = 1;      // or else create a key with value 1
      }
      if(acc[val] > compare){   // if value of that key is greater
                                // than the compare value.
         compare = acc[val];    // than make it a new compare value.
         mostFreq = val;        // also make that key most frequent.
      }
      return acc;
    }, {})
    console.log("Most Frequent Item is:", mostFreq);
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
findMostFrequest(arr1);