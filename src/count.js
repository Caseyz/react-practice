import React, { useState } from 'react'

function Counter(props) {
    return (
        <div>
            Counter
        </div>
    )
}

export default function Count(props) {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button onClick={() => setShow(show => !show)}>Togger</button>
            <p>无keep-alive</p>
            {
                show && <Counter />
            }
            <p>有keep-alive</p>
            {
                show && <Counter />
            }
        </div>
    )

}
