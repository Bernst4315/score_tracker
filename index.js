const scoreboardDiv = document.querySelector(".scoreboard")

scoreboardDiv.addEventListener("click", add)

function add(e){

    const score = document.querySelector(`.${e.target.name}`)
    let count = Number(score.textContent)
    if(e.target.value)  count += Number(e.target.value)
    score.innerHTML = count
}
