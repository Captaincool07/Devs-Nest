
const parent1 = document.getElementById("parent");

for (var i = 0; i < 400; i++) {
  let pix = document.createElement("div");
  pix.className = "pixel";
  parent1.appendChild(pix);
}

const am = document.querySelectorAll(".pixel");
am.forEach((i) => {
  i.addEventListener("click", () => {
    if(i.classList.contains('boxclicked')){
      i.classList.remove('boxclicked')
  }
  else{
      i.classList.add('boxclicked')

  }

});

    


  });




const but=document.getElementById("55");
but.addEventListener("click", () =>{
    location.reload();
});

// box.addEventListener('click', () =>{
//     if(box.classList.contains('boxclicked')){
//         box.classList.remove('boxclicked')
//     }
//     else{
//         box.classList.add('boxclicked')

//     }

// });
