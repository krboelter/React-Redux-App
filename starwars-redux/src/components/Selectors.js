import React from 'react';

export default function Selectors(props) {
    return (
        <>
            {props.people.map(person => (
                <button className={person.name}>{person.name}</button>
            ))}
        </>
    )
}