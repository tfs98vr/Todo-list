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
            important.style.backgroundColor = 'darkseagreen'
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
            taskContainer.removeChild(task.div)
        }       
    })
})

cancelTask.addEventListener('click', function() {
    bgTask.style.display = 'none'
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLFlBQVk7QUFDWjs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN6QmY7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUwsWUFBWTtBQUNaOztBQUVBLGlFQUFlOzs7Ozs7VUM5RGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDWDs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsbUJBQW1CLHVEQUFZOztBQUUvQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxlQUFlLGlEQUFPOztBQUV0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2F0ZWdvcnlCdWlsZCA9IChuYW1lKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lOiBuYW1lLCBhcnI6IFtdfVxufVxuXG5jb25zdCBtYWtlQ2F0ZWdvcnkgPSAobmFtZSwgY29udGFpbmVyLCB0aXRsZSkgPT4ge1xuICAgIGxldCBjYXRlZ29yeSA9IGNhdGVnb3J5QnVpbGQobmFtZSlcblxuICAgIGxldCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2F0ZWdvcnlEaXYudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5uYW1lXG4gICAgY2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktc3R5bGUnKVxuXG4gICAgbGV0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVsQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnXG4gICAgZGVsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpXG5cbiAgICBjYXRlZ29yeURpdi5hcHBlbmRDaGlsZChkZWxCdXR0b24pXG5cbiAgICBkZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNhdGVnb3J5RGl2KVxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdBbGwnXG4gICAgfSlcblxuICAgIHJldHVybiB7bmFtZTogY2F0ZWdvcnkubmFtZSwgYXJyOiBjYXRlZ29yeS5hcnIsIGRpdjogY2F0ZWdvcnlEaXYsIGRlbDogZGVsQnV0dG9ufVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2F0ZWdvcnkiLCJjb25zdCBtYWtlVGFzayA9IChuYW1lLCBkYXRlKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lOiBuYW1lLCBkYXRlOiBkYXRlfVxufVxuXG5jb25zdCBkaXZUYXNrID0gKG5hbWUsIGRhdGUpID0+IHtcbiAgICBsZXQgdGFzayA9IG1ha2VUYXNrKG5hbWUsIGRhdGUpXG5cbiAgICBsZXQgdGFza01haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tNYWluRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuXG4gICAgbGV0IHRhc2tDaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0NoaWxkRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stMScpXG5cbiAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJylcblxuICAgIGxldCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9ICchJ1xuICAgIGltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtYnV0dG9uJylcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWVcblxuICAgIGxldCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5kYXRlXG5cbiAgICBsZXQgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZWxCdXR0b24udGV4dENvbnRlbnQgPSAnWCdcbiAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcblxuICAgIHRhc2tDaGlsZERpdi5hcHBlbmRDaGlsZChjaGVjaylcbiAgICB0YXNrQ2hpbGREaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50KVxuICAgIHRhc2tDaGlsZERpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICB0YXNrQ2hpbGREaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdilcblxuICAgIHRhc2tNYWluRGl2LmFwcGVuZENoaWxkKHRhc2tDaGlsZERpdilcbiAgICB0YXNrTWFpbkRpdi5hcHBlbmRDaGlsZChkZWxCdXR0b24pXG5cbiAgICBsZXQgY291bnQgPSAwIFxuXG4gICAgLy9Tb21lIGV2ZW50IGxpc3RlbmVyc1xuICAgIGltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb3VudCsrXG4gICAgICAgIGlmKGNvdW50ICUgMiAhPSAwKSB7XG4gICAgICAgICAgICBpbXBvcnRhbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ29yYW5nZSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltcG9ydGFudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZGFya3NlYWdyZWVuJ1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvdW50KytcbiAgICAgICAgaWYoY291bnQgJSAyICE9IDApIHtcbiAgICAgICAgICAgIGNoZWNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdkYXJrc2VhZ3JlZW4nXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtkaXY6IHRhc2tNYWluRGl2LCBjaGVjazogY2hlY2ssIGltcG9ydGFudDogaW1wb3J0YW50LCBuYW1lOiB0YXNrLm5hbWUsIGRhdGU6IHRhc2suZGF0ZSwgZGVsOiBkZWxCdXR0b259XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpdlRhc2siLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtYWtlQ2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yaWVzJ1xuaW1wb3J0IGRpdlRhc2sgZnJvbSAnLi90YXNrJ1xuXG5jb25zdCBzaWRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1zaWRlJylcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpXG5jb25zdCBhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsJylcbmNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRhbnQnKVxuY29uc3QgYmdDYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLWNhdGVnb3J5JylcbmNvbnN0IGlucHV0Q2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtY2F0ZWdvcnknKVxuY29uc3QgY2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWNhdGVnb3J5JylcbmNvbnN0IGNhbmNlbENhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1jYXRlZ29yeScpXG5jb25zdCBiZ1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZC10YXNrJylcbmNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXItYnV0dG9uJylcbmNvbnN0IGlucHV0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC10YXNrJylcbmNvbnN0IGRhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtdGFzaycpXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJylcbmNvbnN0IGNhbmNlbFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLXRhc2snKVxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNvbnRhaW5lcicpXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpXG5cbmNvbnN0IHJlcGxhY2VEaXYgPSAoZGl2MSwgZGl2MiwgY29udGFpbmVyKSA9PiB7XG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChkaXYxLCBkaXYyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYyKVxufVxuXG4vL291dHJvIHRldGVcbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGxldCBsaXN0YSA9IE9iamVjdC52YWx1ZXModGFza0NvbnRhaW5lci5jaGlsZHJlbilcbiAgICBsaXN0YS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZChlbClcbiAgICB9KVxufVxuXG5sZXQgYWxsQXJyID0gW11cblxubGV0IGltcG9ydGFudEFyciA9IFtdXG5cbmxldCBjdXJyZW50XG5cbmxldCBjb3VudCA9IDBcblxuYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2xlYXIoKVxuICAgIGFsbEFyci5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbClcbiAgICB9KVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCdcbn0pXG5cbmltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyKClcbiAgICBpbXBvcnRhbnRBcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpXG4gICAgfSlcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnXG59KVxuXG5zaWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgYmdDYXRlZ29yeS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG59KVxuXG5jYXRlZ29yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGxldCBjYXRlZ29yeSA9IG1ha2VDYXRlZ29yeShpbnB1dENhdGVnb3J5LnZhbHVlLCBzaWRlYmFyLCB0aXRsZSlcblxuICAgIHJlcGxhY2VEaXYoY2F0ZWdvcnkuZGl2LCBzaWRlQnV0dG9uLCBzaWRlYmFyKVxuXG4gICAgYmdDYXRlZ29yeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBjYXRlZ29yeS5kaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3VycmVudCA9IGNhdGVnb3J5LmFyclxuICAgICAgICBjbGVhcigpXG4gICAgICAgIGN1cnJlbnQuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsKVxuICAgICAgICB9KVxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5Lm5hbWVcbiAgICB9KVxufSlcblxuY2FuY2VsQ2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBiZ0NhdGVnb3J5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn0pXG5cbnRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBiZ1Rhc2suc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xufSlcblxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGxldCB0YXNrID0gZGl2VGFzayhpbnB1dFRhc2sudmFsdWUsIGRhdGVUYXNrLnZhbHVlKVxuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrLmRpdilcblxuICAgIGJnVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBpZihjdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxsQXJyLnB1c2godGFzay5kaXYpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudC5wdXNoKHRhc2suZGl2KVxuICAgICAgICBhbGxBcnIucHVzaCh0YXNrLmRpdilcbiAgICB9XG5cbiAgICB0YXNrLmRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZihjdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFzay5kaXYpXG4gICAgICAgICAgICBhbGxBcnIuc3BsaWNlKGFsbEFyci5pbmRleE9mKHRhc2suZGl2KSwgYWxsQXJyLmluZGV4T2YodGFzay5kaXYpICsgMSlcbiAgICAgICAgICAgIGltcG9ydGFudEFyci5zcGxpY2UoaW1wb3J0YW50QXJyLmluZGV4T2YodGFzay5kaXYpLCBpbXBvcnRhbnRBcnIuaW5kZXhPZih0YXNrLmRpdikgKyAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrLmRpdilcbiAgICAgICAgICAgIGN1cnJlbnQuc3BsaWNlKGN1cnJlbnQuaW5kZXhPZih0YXNrLmRpdiksIGN1cnJlbnQuaW5kZXhPZih0YXNrLmRpdikgKyAxKVxuICAgICAgICAgICAgYWxsQXJyLnNwbGljZShhbGxBcnIuaW5kZXhPZih0YXNrLmRpdiksIGFsbEFyci5pbmRleE9mKHRhc2suZGl2KSArIDEpXG4gICAgICAgICAgICBpbXBvcnRhbnRBcnIuc3BsaWNlKGltcG9ydGFudEFyci5pbmRleE9mKHRhc2suZGl2KSwgaW1wb3J0YW50QXJyLmluZGV4T2YodGFzay5kaXYpICsgMSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0YXNrLmltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb3VudCArK1xuICAgICAgICBpZihjb3VudCAlIDIgIT0gMCkge1xuICAgICAgICAgICAgaW1wb3J0YW50QXJyLnB1c2godGFzay5kaXYpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbXBvcnRhbnRBcnIuc3BsaWNlKGltcG9ydGFudEFyci5pbmRleE9mKHRhc2suZGl2KSwgaW1wb3J0YW50QXJyLmluZGV4T2YodGFzay5kaXYpICsgMSlcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFzay5kaXYpXG4gICAgICAgIH0gICAgICAgXG4gICAgfSlcbn0pXG5cbmNhbmNlbFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBiZ1Rhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=