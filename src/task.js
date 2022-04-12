const makeTask = (name, date) => {
    return {name: name, date: date}
}

const divTask = (name, date) => {
    let task = makeTask(name, date)

    let taskMainDiv = document.createElement('div')
    taskMainDiv.classList.add('task')

    let taskChildDiv = document.createElement('div')
    taskChildDiv.classList.add('task-1')

    let check = document.createElement('div')
    check.classList.add('check')

    let important = document.createElement('div')
    important.textContent = '!'
    important.classList.add('important-button')

    let title = document.createElement('div')
    title.textContent = task.name

    let dateDiv = document.createElement('div')
    dateDiv.textContent = task.date

    let delButton = document.createElement('div')
    delButton.textContent = 'X'
    delButton.classList.add('delete')

    taskChildDiv.appendChild(check)
    taskChildDiv.appendChild(important)
    taskChildDiv.appendChild(title)
    taskChildDiv.appendChild(dateDiv)

    taskMainDiv.appendChild(taskChildDiv)
    taskMainDiv.appendChild(delButton)

    let count = 0 

    //Some event listeners
    important.addEventListener('click', function() {
        count++
        if(count % 2 != 0) {
            important.style.backgroundColor = 'orange'
        } else {
            important.style.backgroundColor = '#826F66'
        }
    })

    check.addEventListener('click', function() {
        count++
        if(count % 2 != 0) {
            check.style.backgroundColor = 'green'
        } else {
            check.style.backgroundColor = 'darkseagreen'
        }
    })

    return {div: taskMainDiv, check: check, important: important, name: task.name, date: task.date, del: delButton}
}

export default divTask