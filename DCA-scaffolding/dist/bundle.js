/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/add/add.ts":
/*!***********************************!*\
  !*** ./src/components/add/add.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst store_1 = __webpack_require__(/*! ../../store */ \"./src/store/index.ts\");\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\nconst store_2 = __webpack_require__(/*! ../../types/store */ \"./src/types/store.ts\");\nconst firebase_1 = __webpack_require__(/*! ../../utils/firebase */ \"./src/utils/firebase.ts\");\nconst addpr = {\n    title: '',\n    date: '',\n    location: '',\n    image: '',\n    attendees: '',\n};\nclass Add extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0, store_1.dispatch)((0, actions_1.navigate)(store_2.Screens.USER));\n    }\n    connectedCallback() {\n        this.render();\n    }\n    changeTitle(e) {\n        addpr.title = e.target.value;\n    }\n    changeDate(e) {\n        addpr.date = e.target.value;\n    }\n    changeLocation(e) {\n        addpr.location = e.target.value;\n    }\n    changeImage(e) {\n        addpr.image = e.target.value;\n    }\n    submitForm() {\n        (0, firebase_1.addEvent)(addpr);\n        alert('Evento creado');\n    }\n    render() {\n        var _a, _b, _c, _d, _e;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <div>\r\n                    <input type=\"text\" id=\"EventTitle\" placeholder=\"Event title\">\r\n                     <input type=\"date\" id=\"EventDate\" placeholder=\" date\">\r\n                      <input type=\"text\" id=\"location\" placeholder=\"location\" >\r\n                      <input type=\"text\" id=\"imageLink\" placeholder=\"Enter image URL\">\r\n                    <button id=\"submitButton\" type=\"submit\">Add Event</button>\r\n                </div>\r\n            `;\n            const buttonSubmit = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(\"#submitButton\");\n            buttonSubmit.addEventListener('click', this.submitForm);\n            const eventTitle = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(\"#albumTitle\");\n            eventTitle.addEventListener('change', this.changeTitle);\n            const eventDate = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(\"#EventDate\");\n            eventDate.addEventListener('change', this.changeDate);\n            const eventLocation = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector(\"#location\");\n            eventLocation.addEventListener('change', this.changeLocation);\n            const eventImage = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector(\"#imageLink\");\n            eventImage.addEventListener('change', this.changeImage);\n        }\n    }\n}\ncustomElements.define(\"event-form\", Add);\nexports[\"default\"] = Add;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/add/add.ts?");

/***/ }),

/***/ "./src/components/nav/nav.ts":
/*!***********************************!*\
  !*** ./src/components/nav/nav.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\nconst store_1 = __webpack_require__(/*! ../../types/store */ \"./src/types/store.ts\");\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\nclass Nav extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n              \r\n                    <p id=\"admin\">ADMIN</p>\r\n                    <p id=\"usuer\">USER</p>\r\n                   \r\n              \r\n          \r\n            `;\n            const view = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#view');\n            view === null || view === void 0 ? void 0 : view.addEventListener('click', () => {\n                (0, index_1.dispatch)((0, actions_1.navigate)(store_1.Screens.USER));\n            });\n            const add = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#add');\n            add === null || add === void 0 ? void 0 : add.addEventListener('click', () => {\n                (0, index_1.dispatch)((0, actions_1.navigate)(store_1.Screens.ADMIN));\n            });\n        }\n    }\n}\ncustomElements.define(\"nav-commponent\", Nav);\nexports[\"default\"] = Nav;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/nav/nav.ts?");

/***/ }),

/***/ "./src/components/product/product.ts":
/*!*******************************************!*\
  !*** ./src/components/product/product.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Attribute = void 0;\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"idEvent\"] = \"idEvent\";\n    Attribute[\"image\"] = \"image\";\n    Attribute[\"titleEvent\"] = \"titleEvent\";\n    Attribute[\"date\"] = \"date\";\n    Attribute[\"location\"] = \"location\";\n    Attribute[\"attendees\"] = \"attendees\";\n})(Attribute || (exports.Attribute = Attribute = {}));\nclass Event extends HTMLElement {\n    static get observedAttributes() {\n        return Object.values(Attribute);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            case Attribute.idEvent:\n                this.idEvent = newValue ? Number(newValue) : undefined;\n                break;\n            case Attribute.date:\n                this.date = newValue ? Number(newValue) : undefined;\n                break;\n            case Attribute.attendees:\n                this.attendees = newValue ? Number(newValue) : undefined;\n                break;\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <div class=\"event\">\r\n                    <div class=\"perfil\">\r\n                        <div id=\"img\">\r\n                            <img src=\"${this.image}\" >\r\n                        </div>\r\n                        <div class=\"texts\">\r\n                            <p>${this.titleEvent}</p>\r\n                            <p id=\"date\">${this.date}</p>\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"location\">${this.location}</p>\r\n                    <p class=\"attendees\">${this.attendees}</p>\r\n                </div>\r\n            `;\n        }\n    }\n}\ncustomElements.define(\"event-card\", Event);\nexports[\"default\"] = Event;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/product/product.ts?");

/***/ }),

/***/ "./src/firebaseConfig.ts":
/*!*******************************!*\
  !*** ./src/firebaseConfig.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.firebaseConfig = void 0;\nexports.firebaseConfig = {\n    apiKey: \"AIzaSyDF5GWe4zecd0EadYkq_0z91TCviCp6X3A\",\n    authDomain: \"parcial3-157a6.firebaseapp.com\",\n    projectId: \"parcial3-157a6\",\n    storageBucket: \"parcial3-157a6.firebasestorage.app\",\n    messagingSenderId: \"585050227678\",\n    appId: \"1:585050227678:web:18690ecb446dd686a3934f\",\n    measurementId: \"G-DK7PMP8P8Q\"\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/firebaseConfig.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../src/screens/addEvent */ \"./src/screens/addEvent.ts\");\n__webpack_require__(/*! ../src/screens/home */ \"./src/screens/home.ts\");\nconst store_1 = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\nconst store_2 = __webpack_require__(/*! ./types/store */ \"./src/types/store.ts\");\n__webpack_require__(/*! ./components/nav/nav */ \"./src/components/nav/nav.ts\");\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0, store_1.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            switch (store_1.appState.screen) {\n                case store_2.Screens.ADMIN:\n                    const add = this.ownerDocument.createElement('app-add');\n                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(add);\n                    break;\n                case store_2.Screens.USER:\n                    const home = this.ownerDocument.createElement('app-home');\n                    (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(home);\n                    break;\n                default:\n                    break;\n            }\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/addEvent.ts":
/*!*********************************!*\
  !*** ./src/screens/addEvent.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../components/nav/nav */ \"./src/components/nav/nav.ts\");\n__webpack_require__(/*! ../components/add/add */ \"./src/components/add/add.ts\");\nclass AddProduct extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.shadowRoot) {\n                this.shadowRoot.innerHTML = `\r\n        <nav-commponent></nav-commponent>\r\n        <event-form></event-form>\r\n        `;\n            }\n        });\n    }\n}\ncustomElements.define('app-add', AddProduct);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/addEvent.ts?");

/***/ }),

/***/ "./src/screens/home.ts":
/*!*****************************!*\
  !*** ./src/screens/home.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../components/nav/nav */ \"./src/components/nav/nav.ts\");\nconst product_1 = __webpack_require__(/*! ../components/product/product */ \"./src/components/product/product.ts\");\nconst actions_1 = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\nconst store_1 = __webpack_require__(/*! ../store */ \"./src/store/index.ts\");\nconst store_2 = __webpack_require__(/*! ../store */ \"./src/store/index.ts\");\nclass Home extends HTMLElement {\n    constructor() {\n        super();\n        this.eventsList = [];\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (store_2.appState.products.length === 0) {\n                const eventsAction = yield (0, actions_1.getProductsAction)();\n                (0, store_1.dispatch)(eventsAction);\n            }\n        });\n    }\n    render() {\n        return __awaiter(this, void 0, void 0, function* () {\n            var _a, _b;\n            if (this.shadowRoot) {\n                this.shadowRoot.innerHTML = `\r\n           \r\n            <nav-commponent></nav-commponent>\r\n             <div class=\"events\">\r\n             <event-card></event-card>\r\n             \r\n             </div>\r\n            `;\n                (_a = store_2.appState.products) === null || _a === void 0 ? void 0 : _a.forEach(event => {\n                    const eventItem = this.ownerDocument.createElement('event-card');\n                    eventItem.setAttribute(product_1.Attribute.titleEvent, event.title);\n                    eventItem.setAttribute(product_1.Attribute.date, event.author);\n                    eventItem.setAttribute(product_1.Attribute.image, event.image);\n                    eventItem.setAttribute(product_1.Attribute.location, event.location);\n                    eventItem.setAttribute(product_1.Attribute.attendees, event.attendees);\n                    this.eventsList.push(eventItem);\n                });\n                const container = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.events');\n                this.eventsList.forEach((event) => {\n                    container === null || container === void 0 ? void 0 : container.appendChild(event);\n                });\n            }\n            ;\n        });\n    }\n}\ncustomElements.define('app-home', Home);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/home.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getProductsAction = exports.navigate = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst firebase_1 = __webpack_require__(/*! ../utils/firebase */ \"./src/utils/firebase.ts\");\nconst navigate = (screen) => {\n    return {\n        action: store_1.Actions.NAVIGATE,\n        payload: screen,\n    };\n};\nexports.navigate = navigate;\nconst getProductsAction = () => __awaiter(void 0, void 0, void 0, function* () {\n    const products = yield (0, firebase_1.getEvents)(); //Firestore\n    return {\n        action: store_1.Actions.GETPRODUCTS,\n        payload: products,\n    };\n});\nexports.getProductsAction = getProductsAction;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addObserver = exports.dispatch = exports.appState = void 0;\nconst reducer_1 = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\nconst initialState = {\n    screen: 'ADMIN',\n    products: [],\n    currentProduct: null\n};\nexports.appState = initialState;\nlet observers = [];\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(exports.appState));\n    const newState = (0, reducer_1.reducer)(action, clone);\n    exports.appState = newState;\n    // persistStore(newState);\n    observers.forEach((o) => o.render());\n};\nexports.dispatch = dispatch;\n//Agregar los observadores para los interesados, los suscritos\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\nexports.addObserver = addObserver;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.reducer = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case store_1.Actions.NAVIGATE:\n            return Object.assign(Object.assign({}, currentState), { screen: payload });\n        case store_1.Actions.GETPRODUCTS:\n            return Object.assign(Object.assign({}, currentState), { products: payload });\n        default:\n            return currentState;\n    }\n};\nexports.reducer = reducer;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Actions = exports.Screens = void 0;\nvar Screens;\n(function (Screens) {\n    Screens[\"ADMIN\"] = \"ADMIN\";\n    Screens[\"USER\"] = \"USER\";\n})(Screens || (exports.Screens = Screens = {}));\nvar Actions;\n(function (Actions) {\n    Actions[\"NAVIGATE\"] = \"NAVIGATE\";\n    Actions[\"GETPRODUCTS\"] = \"GETPRODUCTS\";\n})(Actions || (exports.Actions = Actions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/firebase.ts":
/*!*******************************!*\
  !*** ./src/utils/firebase.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteEvent = exports.getEvents = exports.addEvent = exports.getFirebaseInstance = void 0;\nconst firebaseConfig_1 = __webpack_require__(/*! ../firebaseConfig */ \"./src/firebaseConfig.ts\");\nlet db;\nlet auth;\nlet storage;\nconst getFirebaseInstance = () => __awaiter(void 0, void 0, void 0, function* () {\n    if (!db) {\n        const { getFirestore } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const { initializeApp } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"node_modules_firebase_app_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\"));\n        const { getAuth } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\"));\n        const { getStorage } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_storage_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\"));\n        const app = initializeApp(firebaseConfig_1.firebaseConfig);\n        db = getFirestore(app);\n        auth = getAuth(app);\n        storage = getStorage();\n    }\n    return { db, auth, storage };\n});\nexports.getFirebaseInstance = getFirebaseInstance;\nconst addEvent = (post) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { collection, addDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const where = collection(db, 'events');\n        const registerPost = {\n            title: post.title,\n            date: post.date,\n            location: post.location,\n            image: post.image,\n            attendees: post.attendees,\n            dateadded: new Date().toISOString(),\n        };\n        // Añadir el post y obtener la referencia del documento creado\n        const docRef = yield addDoc(where, registerPost);\n        console.log('Se añadió con éxito el post con ID:', docRef.id);\n        // Retorna el ID del documento creado\n        return docRef.id;\n    }\n    catch (error) {\n        console.error('Error al añadir el documento:', error);\n        throw error; // Lanzar el error para manejarlo en la llamada\n    }\n});\nexports.addEvent = addEvent;\nconst getEvents = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { collection, getDocs, query, orderBy } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const postsCollection = collection(db, 'events');\n        // Ordena los documentos por 'dateadded' en orden descendente\n        const postsQuery = query(postsCollection, orderBy('dateadded', 'desc'));\n        const querySnapshot = yield getDocs(postsQuery);\n        const data = [];\n        querySnapshot.forEach((doc) => {\n            const postData = doc.data();\n            postData.id = doc.id;\n            data.push(postData);\n        });\n        return data;\n    }\n    catch (error) {\n        console.error('Error obteniendo los documentos:', error);\n        return [];\n    }\n});\nexports.getEvents = getEvents;\nconst deleteEvent = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { doc, deleteDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        // Crear referencia al documento específico\n        const docRef = doc(db, 'events', id);\n        // Eliminar el documento\n        yield deleteDoc(docRef);\n        console.log(`El producto con ID ${id} ha sido eliminado correctamente.`);\n    }\n    catch (error) {\n        console.error('Error al eliminar el producto de Firebase:', error);\n        throw error; // Relanzar el error para manejarlo en otros niveles\n    }\n});\nexports.deleteEvent = deleteEvent;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/firebase.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "dca_scoffolding:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdca_scoffolding"] = self["webpackChunkdca_scoffolding"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;