import React from 'react'

export default function Member(props) {
    const {info} = props

    return(
        <div className='member-info'>
            <h2>{info.firstname} {info.lastname}</h2>
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
        </div>
    )
    return null
}