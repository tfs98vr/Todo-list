/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/categories.js":
/*!***************************!*\
  !*** ./src/categories.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCategory);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (divTask);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories */ "./src/categories.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



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
    
    let category = (0,_categories__WEBPACK_IMPORTED_MODULE_0__["default"])(inputCategory.value, sidebar, title)

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
    let task = (0,_task__WEBPACK_IMPORTED_MODULE_1__["default"])(inputTask.value, dateTask.value)

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLFlBQVk7QUFDWjs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN6QmY7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUwsWUFBWTtBQUNaOztBQUVBLGlFQUFlOzs7Ozs7VUM5RGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDWDs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxtQkFBbUIsdURBQVk7O0FBRS9COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGVBQWUsaURBQU87O0FBRXRCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2F0ZWdvcnlCdWlsZCA9IChuYW1lKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lOiBuYW1lLCBhcnI6IFtdfVxufVxuXG5jb25zdCBtYWtlQ2F0ZWdvcnkgPSAobmFtZSwgY29udGFpbmVyLCB0aXRsZSkgPT4ge1xuICAgIGxldCBjYXRlZ29yeSA9IGNhdGVnb3J5QnVpbGQobmFtZSlcblxuICAgIGxldCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2F0ZWdvcnlEaXYudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5uYW1lXG4gICAgY2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktc3R5bGUnKVxuXG4gICAgbGV0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVsQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnXG4gICAgZGVsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpXG5cbiAgICBjYXRlZ29yeURpdi5hcHBlbmRDaGlsZChkZWxCdXR0b24pXG5cbiAgICBkZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNhdGVnb3J5RGl2KVxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdBbGwnXG4gICAgfSlcblxuICAgIHJldHVybiB7bmFtZTogY2F0ZWdvcnkubmFtZSwgYXJyOiBjYXRlZ29yeS5hcnIsIGRpdjogY2F0ZWdvcnlEaXYsIGRlbDogZGVsQnV0dG9ufVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2F0ZWdvcnkiLCJjb25zdCBtYWtlVGFzayA9IChuYW1lLCBkYXRlKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lOiBuYW1lLCBkYXRlOiBkYXRlfVxufVxuXG5jb25zdCBkaXZUYXNrID0gKG5hbWUsIGRhdGUpID0+IHtcbiAgICBsZXQgdGFzayA9IG1ha2VUYXNrKG5hbWUsIGRhdGUpXG5cbiAgICBsZXQgdGFza01haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tNYWluRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuXG4gICAgbGV0IHRhc2tDaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0NoaWxkRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stMScpXG5cbiAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJylcblxuICAgIGxldCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9ICchJ1xuICAgIGltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtYnV0dG9uJylcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWVcblxuICAgIGxldCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5kYXRlXG5cbiAgICBsZXQgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZWxCdXR0b24udGV4dENvbnRlbnQgPSAnWCdcbiAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcblxuICAgIHRhc2tDaGlsZERpdi5hcHBlbmRDaGlsZChjaGVjaylcbiAgICB0YXNrQ2hpbGREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50KVxuICAgIHRhc2tDaGlsZERpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICB0YXNrQ2hpbGREaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdilcblxuICAgIHRhc2tNYWluRGl2LmFwcGVuZENoaWxkKHRhc2tDaGlsZERpdilcbiAgICB0YXNrTWFpbkRpdi5hcHBlbmRDaGlsZChkZWxCdXR0b24pXG5cbiAgICBsZXQgY291bnQgPSAwIFxuXG4gICAgLy9Tb21lIGV2ZW50IGxpc3RlbmVyc1xuICAgIGltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb3VudCsrXG4gICAgICAgIGlmKGNvdW50ICUgMiAhPSAwKSB7XG4gICAgICAgICAgICBpbXBvcnRhbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ29yYW5nZSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltcG9ydGFudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgyNkY2NidcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb3VudCsrXG4gICAgICAgIGlmKGNvdW50ICUgMiAhPSAwKSB7XG4gICAgICAgICAgICBjaGVjay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVjay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZGFya3NlYWdyZWVuJ1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB7ZGl2OiB0YXNrTWFpbkRpdiwgY2hlY2s6IGNoZWNrLCBpbXBvcnRhbnQ6IGltcG9ydGFudCwgbmFtZTogdGFzay5uYW1lLCBkYXRlOiB0YXNrLmRhdGUsIGRlbDogZGVsQnV0dG9ufVxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXZUYXNrIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWFrZUNhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcmllcydcbmltcG9ydCBkaXZUYXNrIGZyb20gJy4vdGFzaydcblxuY29uc3Qgc2lkZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tc2lkZScpXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKVxuY29uc3QgYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbCcpXG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50JylcbmNvbnN0IGJnQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZC1jYXRlZ29yeScpXG5jb25zdCBpbnB1dENhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWNhdGVnb3J5JylcbmNvbnN0IGNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1jYXRlZ29yeScpXG5jb25zdCBjYW5jZWxDYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtY2F0ZWdvcnknKVxuY29uc3QgYmdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQtdGFzaycpXG5jb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyLWJ1dHRvbicpXG5jb25zdCBpbnB1dFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtdGFzaycpXG5jb25zdCBkYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXRhc2snKVxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpXG5jb25zdCBjYW5jZWxUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC10YXNrJylcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKVxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKVxuXG5jb25zdCByZXBsYWNlRGl2ID0gKGRpdjEsIGRpdjIsIGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZGl2MSwgZGl2MilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2Milcbn1cblxuLy9vdXRybyB0ZXRlXG5jb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBsZXQgbGlzdGEgPSBPYmplY3QudmFsdWVzKHRhc2tDb250YWluZXIuY2hpbGRyZW4pXG4gICAgbGlzdGEuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQoZWwpXG4gICAgfSlcbn1cblxubGV0IGFsbEFyciA9IFtdXG5cbmxldCBpbXBvcnRhbnRBcnIgPSBbXVxuXG5sZXQgY3VycmVudFxuXG5sZXQgY291bnQgPSAwXG5cbmFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyKClcbiAgICBhbGxBcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpXG4gICAgfSlcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdBbGwnXG59KVxuXG5pbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjbGVhcigpXG4gICAgaW1wb3J0YW50QXJyLmZvckVhY2goZWwgPT4ge1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsKVxuICAgIH0pXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50J1xufSlcblxuc2lkZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGJnQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xufSlcblxuY2F0ZWdvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBsZXQgY2F0ZWdvcnkgPSBtYWtlQ2F0ZWdvcnkoaW5wdXRDYXRlZ29yeS52YWx1ZSwgc2lkZWJhciwgdGl0bGUpXG5cbiAgICByZXBsYWNlRGl2KGNhdGVnb3J5LmRpdiwgc2lkZUJ1dHRvbiwgc2lkZWJhcilcblxuICAgIGJnQ2F0ZWdvcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgY2F0ZWdvcnkuZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjYXRlZ29yeS5hcnJcbiAgICAgICAgY2xlYXIoKVxuICAgICAgICBjdXJyZW50LmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbClcbiAgICAgICAgfSlcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5uYW1lXG4gICAgfSlcbn0pXG5cbmNhbmNlbENhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgYmdDYXRlZ29yeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59KVxuXG50YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgYmdUYXNrLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbn0pXG5cbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgdGFzayA9IGRpdlRhc2soaW5wdXRUYXNrLnZhbHVlLCBkYXRlVGFzay52YWx1ZSlcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzay5kaXYpXG5cbiAgICBiZ1Rhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgaWYoY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFsbEFyci5wdXNoKHRhc2suZGl2KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnQucHVzaCh0YXNrLmRpdilcbiAgICAgICAgYWxsQXJyLnB1c2godGFzay5kaXYpXG4gICAgfVxuXG4gICAgdGFzay5kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2suZGl2KVxuICAgICAgICAgICAgYWxsQXJyLnNwbGljZShhbGxBcnIuaW5kZXhPZih0YXNrLmRpdiksIGFsbEFyci5pbmRleE9mKHRhc2suZGl2KSArIDEpXG4gICAgICAgICAgICBpbXBvcnRhbnRBcnIuc3BsaWNlKGltcG9ydGFudEFyci5pbmRleE9mKHRhc2suZGl2KSwgaW1wb3J0YW50QXJyLmluZGV4T2YodGFzay5kaXYpICsgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFzay5kaXYpXG4gICAgICAgICAgICBjdXJyZW50LnNwbGljZShjdXJyZW50LmluZGV4T2YodGFzay5kaXYpLCBjdXJyZW50LmluZGV4T2YodGFzay5kaXYpICsgMSlcbiAgICAgICAgICAgIGFsbEFyci5zcGxpY2UoYWxsQXJyLmluZGV4T2YodGFzay5kaXYpLCBhbGxBcnIuaW5kZXhPZih0YXNrLmRpdikgKyAxKVxuICAgICAgICAgICAgaW1wb3J0YW50QXJyLnNwbGljZShpbXBvcnRhbnRBcnIuaW5kZXhPZih0YXNrLmRpdiksIGltcG9ydGFudEFyci5pbmRleE9mKHRhc2suZGl2KSArIDEpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGFzay5pbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY291bnQgKytcbiAgICAgICAgaWYoY291bnQgJSAyICE9IDApIHtcbiAgICAgICAgICAgIGltcG9ydGFudEFyci5wdXNoKHRhc2suZGl2KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1wb3J0YW50QXJyLnNwbGljZShpbXBvcnRhbnRBcnIuaW5kZXhPZih0YXNrLmRpdiksIGltcG9ydGFudEFyci5pbmRleE9mKHRhc2suZGl2KSArIDEpXG4gICAgICAgIH0gICAgICAgXG4gICAgfSlcbn0pXG5cbmNhbmNlbFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBiZ1Rhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=