import React, { useState } from 'react'

const Toggle = () => {
    const [show, setShow] = useState(false)
    const handleShow = e => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }
    return <>
        {
            show && <h1>hello</h1>

        }
        <button onClick={handleShow}>toggle</button>
    </>
}

export default Toggle

