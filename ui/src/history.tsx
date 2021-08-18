import {createBrowserHistory} from "history"

let history = createBrowserHistory()

const location = history.location
console.log("browser history initial location: ", location)
history.listen((location) => {
    console.log("browser history location change: ", location)
})

export default history