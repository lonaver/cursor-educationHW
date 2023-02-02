/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://homework14/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("//HomeWork1\nconst priceCandle = 15.678;\nconst priceLamp = 123.965;\nconst priceGlass = 90.2345;\nconst max = Math.max(priceCandle, priceLamp, priceGlass);\ndocument.querySelector(\".HW1\").textContent = `TASK1: priceCandle = 15.678; priceLamp = 123.965; priceGlass = 90.2345; Maxprice=${max}`;\n\n//HomeWork3\nconst Salary = prompt(\"HOMEWORK3 Task4, Enter salary:\");\ngetSalary = Salary => {\n  let numberSalary = Number(Salary);\n  if (typeof numberSalary !== \"number\" || isNaN(numberSalary)) return;\n  numberSalary -= numberSalary / 100 * 18 + numberSalary / 100 * 1.5;\n  return numberSalary;\n};\ndocument.querySelector(\".HW3\").textContent = `HOMEWORK3 Task 4: grose wage ${Salary}, minus tax ${getSalary(Salary)}`;\n\n//HomeWork4\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\nconst marks = [4, 5, 5, 3, 4, 5];\nconst wrapper = document.querySelector(\".wrapper_HW4\");\nGetArrayCouple = students => {\n  const arrayF = [];\n  const arrayM = [];\n  const arrayLetter = [\"а\", \"я\"];\n  for (let value of students) {\n    let name = value.split(\"\");\n    if (arrayLetter.indexOf(name.at(-1), 0) != -1) {\n      arrayF.push(value);\n    } else {\n      arrayM.push(value);\n    }\n  }\n  const arrayResultCouple = [];\n  for (let i = 0; i < arrayM.length; i++) {\n    arrayResultCouple.push([arrayM[i], arrayF[i]]);\n    const personWrapper = document.createElement(\"div\");\n    personWrapper.classList.add(\"cards_item\");\n    const personName = document.createElement(\"h3\");\n    personName.classList.add(\"person_name\");\n    personName.textContent = `Get couple from team: ${arrayM[i]}-${arrayF[i]}`;\n    personWrapper.append(personName);\n    wrapper.append(personWrapper);\n  }\n\n  // return arrayResultCouple;\n};\n\nGetArrayCouple(students);\n\n//HomeWork5\nconst arrayEvenNumbers = [1, 2, 3, 4, 5, 6];\nlet filterEvenNumbers = arrayEvenNumbers => {\n  return arrayEvenNumbers.filter(element => element % 2 !== 0);\n};\ndocument.querySelector(\".HW5\").textContent = `HOMEWORK5 Task 5: filtered ${arrayEvenNumbers} odd numbers ${filterEvenNumbers(arrayEvenNumbers)}`;\n\n//HomeWork6\nconst studentsHW6 = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}, {\n  name: \"Victor\",\n  course: 4,\n  subjects: {\n    physics: [5, 5, 5, 3],\n    economics: [2, 3, 3, 3, 3, 5],\n    geometry: [5, 5, 2, 3, 5]\n  }\n}, {\n  name: \"Anton\",\n  course: 2,\n  subjects: {\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n    english: [5, 3],\n    cosmology: [5, 5, 5, 5]\n  }\n}];\nlet someStudent = studentsHW6[0];\nlet getSubjects = someStudent => {\n  let subjectsForStudents = [];\n  let nameSubject = \"\";\n  for (let key in someStudent.subjects) {\n    nameSubject = key;\n    nameSubject = nameSubject.replace(nameSubject[0], nameSubject[0].toUpperCase());\n    nameSubject = nameSubject.replace(\"_\", \" \");\n    subjectsForStudents.push(nameSubject);\n  }\n  return subjectsForStudents;\n};\ndocument.querySelector(\".HW6\").textContent = `HOMEWORK6 Task 1: subjects ${getSubjects(someStudent)} by student ${someStudent.name}`;\n\n//HomeWork7\nconst ukraine = {\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n};\nconst latvia = {\n  tax: 0.25,\n  middleSalary: 1586,\n  vacancies: 3921\n};\nconst litva = {\n  tax: 0.15,\n  middleSalary: 1509,\n  vacancies: 1114\n};\nconst wrapperHW7 = document.querySelector(\".wrapper_HW7\");\nfunction getMyTaxes(salary) {\n  return this.tax * salary;\n}\n//For test\nconst ukraineWrapper = document.createElement(\"div\");\nukraineWrapper.classList.add(\"cards_item\");\nukraineWrapper.textContent = `Task1, ukraine: ${getMyTaxes.call(ukraine, 1789)}`;\nconst latviaWrapper = document.createElement(\"div\");\nlatviaWrapper.classList.add(\"cards_item\");\nlatviaWrapper.textContent = `Task1, latvia: ${getMyTaxes.call(latvia, 1789)}`;\nconst litvaWrapper = document.createElement(\"div\");\nlitvaWrapper.classList.add(\"cards_item\");\nlitvaWrapper.textContent = `Task1, litva: ${getMyTaxes.call(litva, 1789)}`;\nwrapperHW7.append(ukraineWrapper);\nwrapperHW7.append(latviaWrapper);\nwrapperHW7.append(litvaWrapper);\n\n// console.log(`Task1, ukraine: ${getMyTaxes.call(ukraine, 1789)}`);\n// console.log(`Task1, latvia: ${getMyTaxes.call(latvia, 1789)}`);\n// console.log(`Task1, litva: ${getMyTaxes.call(litva, 1789)}`);\n\n//# sourceURL=webpack://homework14/./src/script.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;