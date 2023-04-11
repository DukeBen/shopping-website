import React from 'react'

export default function ReviewProfile(props)
{
    return (
        <div className = 'container'>
            <div className = 'sub-container'>
                {props.name}
            </div>
        </div>
    )
}