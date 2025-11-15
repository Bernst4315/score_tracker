const addBtn = document.querySelector(".add");
const homescoreEl = document.querySelector(".homescore")

let count = 0;

addBtn.addEventListener("click", add)

function add(){
    // console.log(`Start: ${count}`)
    count++
    // console.log(`End: ${count}`)
    homescoreEl.innerHTML = count; 
}
