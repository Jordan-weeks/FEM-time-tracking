// load data
const loadData = async () =>{
    const res = await(fetch('http://localhost:5000/data/'))
    const data = await res.json()
    return data
}
let data = loadData()
let view = "daily"
const fillDom = () =>{
    
    createDashElement(work, 0)
    createDashElement(play, 1)
    createDashElement(study, 2)
    createDashElement(exercise, 3)
    createDashElement(social, 4)
    createDashElement(selfCare, 5)
    
   

    
}

const createDashElement = async(parent, index) =>{
    let data = await(loadData())
    let title = document.createElement('h2')
    let current = document.createElement('h2')
    let previous = document.createElement('h2')
    let container = document.createElement('div')
    let svg = document.createElement('svg')
    title.classList.add('info-title')
    current.classList.add('info-current')
    previous.classList.add('info-previous')
    title.innerText= data[index].title    
    svg.innerHTML='<svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>'
    current.innerText=data[index].timeframes[view].current+" hrs"
    switch(view){
        case "daily":
            previous.innerText="Yesterday - " +data[index].timeframes[view].previous+" hrs"
            break
        case "weekly":
            previous.innerText="Last Week - " +data[index].timeframes[view].previous+" hrs"
            break
        case "monthly":
            previous.innerText="Last month - " +data[index].timeframes[view].previous+" hrs"
            break
        
    }
    svg.addEventListener('click', () => {ellipsisClicked(data[index].title)})
    container.append(title,svg)
    parent.append(container,current,previous)
    
    

}
const ellipsisClicked = (title) =>{
    console.log(`You clicked the ${title} ellipsis!`)
}
const clearDOM = () =>{
    work.innerHTML = ""
    play.innerHTML = ""
    study.innerHTML = ""
    exercise.innerHTML = ""
    social.innerHTML = ""
    selfCare.innerHTML = ""
    

}
const changeDisplay = (updatedView) =>{
    let currentSelection = document.getElementById(view)
    currentSelection.classList.remove('active')
    let newSelection = document.getElementById(updatedView)
    newSelection.classList.add('active')
    view = updatedView
    clearDOM()
    fillDom()
    console.log(view)
}

const work = document.querySelector('#work-info')
const play = document.querySelector('#play-info')
const study = document.querySelector('#study-info')
const exercise = document.querySelector('#exercise-info')
const social = document.querySelector('#social-info')
const selfCare = document.querySelector('#self-care-info')

const daily = document.getElementById("daily")
daily.addEventListener("click", () => changeDisplay("daily"))
const weekly = document.querySelector("#weekly")
weekly.addEventListener("click", () => changeDisplay("weekly"))
const monthly = document.querySelector("#monthly")
monthly.addEventListener("click", () => changeDisplay("monthly"))

fillDom()