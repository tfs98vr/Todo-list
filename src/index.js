import makeCategory from './categories'
import divTask from './task'

const sideButton = document.getElementById('button-side')
const sidebar = document.getElementById('sidebar')
const all = document.getElementById('all')
const important = document.getElementById('important')
const bgCategory = document.getElementById('background-category')
const inputCategory = document.getElementById('input-category')
const categoryButton = document.getElementById('add-category')
const cancelCategory = document.getElementById('cancel-category')
const bgTask = document.getElementById('background-task')
const taskButton = document.getElementById('task-container-button')
const inputTask = document.getElementById('input-task')
const dateTask = document.getElementById('date-task')
const addTask = document.getElementById('add-task')
const cancelTask = document.getElementById('cancel-task')
const taskContainer = document.getElementById('task-container')
const title = document.getElementById('title')

const replaceDiv = (div1, div2, container) => {
    container.replaceChild(div1, div2)
    container.appendChild(div2)
}

//outro tete
const clear = () => {
    let lista = Object.values(taskContainer.children)
    lista.forEach(el => {
        taskContainer.removeChild(el)
    })
}

let allArr = []

let importantArr = []

let current

let count = 0

all.addEventListener('click', function() {
    clear()
    allArr.forEach(el => {
        taskContainer.appendChild(el)
    })
    title.textContent = 'All'
})

important.addEventListener('click', function() {
    clear()
    importantArr.forEach(el => {
        taskContainer.appendChild(el)
    })
    title.textContent = 'Important'
})

sideButton.addEventListener('click', function() {
    bgCategory.style.display = 'flex'
})

categoryButton.addEventListener('click', function() {
    
    let category = makeCategory(inputCategory.value, sidebar, title)

    replaceDiv(category.div, sideButton, sidebar)

    bgCategory.style.display = 'none'

    category.div.addEventListener('click', function() {
        current = category.arr
        clear()
        current.forEach(el => {
            taskContainer.appendChild(el)
        })
        title.textContent = category.name
    })
})

cancelCategory.addEventListener('click', function() {
    bgCategory.style.display = 'none'
})

taskButton.addEventListener('click', function() {
    bgTask.style.display = 'flex'
})

addTask.addEventListener('click', function() {
    let task = divTask(inputTask.value, dateTask.value)

    taskContainer.appendChild(task.div)

    bgTask.style.display = 'none'

    if(current === undefined) {
        allArr.push(task.div)
    } else {
        current.push(task.div)
        allArr.push(task.div)
    }

    task.del.addEventListener('click', function() {
        if(current === undefined) {
            taskContainer.removeChild(task.div)
            allArr.splice(allArr.indexOf(task.div), allArr.indexOf(task.div) + 1)
            importantArr.splice(importantArr.indexOf(task.div), importantArr.indexOf(task.div) + 1)
        } else {
            taskContainer.removeChild(task.div)
            current.splice(current.indexOf(task.div), current.indexOf(task.div) + 1)
            allArr.splice(allArr.indexOf(task.div), allArr.indexOf(task.div) + 1)
            importantArr.splice(importantArr.indexOf(task.div), importantArr.indexOf(task.div) + 1)
        }
    })

    task.important.addEventListener('click', function() {
        count ++
        if(count % 2 != 0) {
            importantArr.push(task.div)
        } else {
            importantArr.splice(importantArr.indexOf(task.div), importantArr.indexOf(task.div) + 1)
        }       
    })
})

cancelTask.addEventListener('click', function() {
    bgTask.style.display = 'none'
})