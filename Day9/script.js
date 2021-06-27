var cont=document.getElementById('seats');
let total= 36;
for (let i = 0; i < 36; i++) {
    let block = document.createElement('div');
    block.className = "chair";
    cont.appendChild(block)
}
var sit=document.querySelectorAll('.chair');

sit.forEach((i) =>{
    i.addEventListener('click', () => {
        i.classList.toggle('notavailable');
        if (i.classList.contains('notavailable')) {
          total -= 1;
          booked.innerHTML = `Seats left:${total}`;
        } else {
          total += 1;
          booked.innerHTML = `Seats left:${total}`;
        }
      });
    });
const btk =document.getElementById('btn');
btk.addEventListener('click', () =>{
    location.reload()
})



// box.addEventListener('click', () =>{
//     if(box.classList.contains('boxclicked')){
//         box.classList.remove('boxclicked')
//     }
//     else{
//         box.classList.add('boxclicked')

//     }

// });
