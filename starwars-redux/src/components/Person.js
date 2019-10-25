import React from 'react';

export default function Person(props) {
    return (
        <div>
            <h2>{props.person.name}</h2>
            <div>
                <p>{props.person.birth_year}</p>
                <p>{props.person.gender}</p>
                <p>{props.person.height}</p>
                <p>{props.person.mass}</p>
                <p>{props.person.hair_color}</p>
            </div>
        </div>
    )
}