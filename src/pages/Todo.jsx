import React, { useState } from 'react'

const Todo = () => {
    const [show, setShow] = useState(false)
    const [task, setTask] = useState("")
    const [notes, setNotes] = useState([])
    const handleAdd = () => {
        setNotes([...notes, task])
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 1000)
    }
    const handleDelete = arg => {
        setNotes(notes.filter(item => item !== arg))
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    {show && <div className='alert alert-success'>Todo Create Success</div>}
                    <div class="card">
                        <div class="card-header">Todo</div>
                        <div class="card-body">

                            <div className='input-group'>
                                <input
                                    className='form-control'
                                    type="text"
                                    onChange={e => setTask(e.target.value)} />
                                <button
                                    className='btn btn-dark'
                                    onClick={handleAdd}>add</button>
                            </div>

                        </div>
                    </div>
                    {/* card end */}
                    <hr />
                    {notes.length === 0 && <h1>No Todo</h1>}
                    {
                        notes.map(item => <div className='card' key={item}>

                            <div className='card-body d-flex justify-content-between'>
                                <span>{item}</span>
                                <button className='btn btn-outline-danger ' onClick={e => handleDelete(item)}>delete</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </>
}

export default Todo

