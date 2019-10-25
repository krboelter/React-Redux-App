import React from 'react';
import Person from './Person';

export default function PersonList(props) {
    return (
        <>
            {props.people.map(person => (
                <Person person={person} />
            ))}
        </>
    )
}