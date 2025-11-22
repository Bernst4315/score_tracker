const addBtn = document.querySelector(".add");
const homeIncrementDiv = document.querySelector("#homeIncrement")
const scoreboardDiv = document.querySelector(".scoreboard")
const homescoreEl = document.querySelector(".homescore")

let count = 0;

//addBtn.addEventListener("click", add)
//homeIncrementDiv.addEventListener("click", add)
scoreboardDiv.addEventListener("click", add)

function add(e){
    // console.log(e.target.parentElement.id)
    console.log(e.target)
    // console.log(e.target.value)

    // console.log(`Start: ${count}`)
    if(e.target.value)  count += Number(e.target.value)
    // console.log(`End: ${count}`)
    homescoreEl.innerHTML = count; 
}
