// const addBtn = document.querySelector(".add");
// const homeIncrementDiv = document.querySelector("#homeIncrement")
const scoreboardDiv = document.querySelector(".scoreboard")
// const homescoreEl = document.querySelector(`.homescore`)

//let count = 0;

//addBtn.addEventListener("click", add)
//homeIncrementDiv.addEventListener("click", add)
scoreboardDiv.addEventListener("click", add)

function add(e){
    // console.log(e.target.parentElement.id)
    console.log(e.target.attributes.for)
    // console.log(e.target.value)

    // console.log(`Start: ${count}`)
    const score = document.querySelector(`.${e.target.attributes.for.value}`)
    let count = Number(score.textContent)
    if(e.target.value)  count += Number(e.target.value)
    // console.log(`End: ${count}`)
    //homescoreEl.innerHTML = count
    console.log(score)
    score.innerHTML = count
}
