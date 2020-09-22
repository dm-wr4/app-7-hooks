import React, {useState} from 'react'

export default function NewTask(props){
    const [userInput, setUserInput] = useState('')

    const handleAddItem = () => {
        props.addNewItem(userInput)
        setUserInput('')
    }

    return(
        <div>
            <input value={userInput} onChange={e => setUserInput(e.target.value)}/>
            <button onClick={() => handleAddItem()}>Add Item</button>
        </div>
    )
}