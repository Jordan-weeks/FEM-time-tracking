// load data
const loadData = async () =>{
    const res = await(fetch('http://localhost:5000/data/'))
    const data = await res.json()
    return data
}
let data = loadData()
let view = "daily"
const fillDom = () =>{
    
        
    let work = document.querySelector('#work-info')
    let play = document.querySelector('#play-info')
    let study = document.querySelector('#study-info')
    let exercise = document.querySelector('#exercise-info')
    let social = document.querySelector('#social-info')
    let selfCare = document.querySelector('#self-care-info')
    createDashElement(work, 0,)
    
}
const createDashElement = async(parent, index) =>{
    let data = await(loadData())
    let title = document.createElement('h2')
    let current = document.createElement('h2')
    let previous = document.createElement('h2')
    title.innerText= data[index].title    
    current.innerText=data[index].timeframes.[view].current
    console.log(data[0].timeframes.daily.current)
    parent.append(title)
    

}
fillDom()