import React, { useState, useEffect } from 'react'
import axios from 'axios'



const task = {
    title: '',
    task: '',
    status: false
}
export default function Form({ requestType, data }) {
    const [value, bind] = useInput(task)
    const handleSubmit = (e) => {
        switch (requestType) {
            case 'post':
                axios({
                    method: 'post',
                    url: 'http://localhost:8000/api/',
                    data: {
                        title: value.title,
                        task: value.task,
                        status: false
                    }
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                break

            case 'put':
                axios({
                    method: 'put',
                    url: `http://localhost:8000/api/${data}/`,
                    data: {
                        title: value.title,
                        task: value.task,
                        status: false
                    }
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                break
        }


        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>Sign Up</p>
            <label htmlFor="title">Title: </label>
            <input
                type="text"
                name="title"
                placeholder="Task Title"
                {...bind}
            />
            <label htmlFor="details">Details</label>
            <input
                type="text"
                name='task'
                placeholder='describe'
                {...bind}
            />
            <button>Add Task</button>
        </form>
    )
}


const useInput = (initialState) => {
    const [state, setState] = useState(initialState)
    let inputName
    const bind = {
        onChange: e => {
            const { name, value } = e.target
            setState({ ...state, [name]: value })
            inputName = name
            console.log(state)
        },
        state: state.inputName
    }

    return [state, bind]
}
