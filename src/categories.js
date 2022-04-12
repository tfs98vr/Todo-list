const categoryBuild = (name) => {
    return {name: name, arr: []}
}

const makeCategory = (name, container, title) => {
    let category = categoryBuild(name)

    let categoryDiv = document.createElement('div')
    categoryDiv.textContent = category.name
    categoryDiv.classList.add('category-style')

    let delButton = document.createElement('div')
    delButton.textContent = 'X'
    delButton.classList.add('delete')

    categoryDiv.appendChild(delButton)

    delButton.addEventListener('click', function() {
        container.removeChild(categoryDiv)
        title.textContent = 'All'
    })

    return {name: category.name, arr: category.arr, div: categoryDiv, del: delButton}
}

export default makeCategory