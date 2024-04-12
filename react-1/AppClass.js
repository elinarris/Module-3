// STATE PRACTICE

import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Denise",
            age: 32
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default App







// STATE PRACTICE BOOLEANS (MY VERSION)

import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.isLoggedIn = false
    }
    render() {
        if (this.isLoggedIn == true) {
            return (
                <div>
                    <h1>You are currently logged in.</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>You are currently logged out.</h1>
                </div>
            )
        }
    }
}

export default App

// STATE PRACTICE BOOLEANS (VSCHOOL VERSION)

import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        let wordDisplay
        if (this.state.isLoggedIn) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default App

// STATE TODOS

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App