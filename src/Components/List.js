import React from 'react'
import Todo from './Todo'

const List = props => {

    const result = props.listOfTodoItems.map((chore, index) => {
        return (
            <Todo todoItem={chore} key={index}/>
        )
    })

    return (
        <div>
            {result}
        </div>
    )
}

export default List
