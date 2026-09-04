import React from 'react'
import { useParams } from 'react-router-dom'

const Contactdetails = () => {

    const params = useParams()

    return (
        <div>
            <h1> {params.id} details's </h1>
        </div>
    )
}

export default Contactdetails
