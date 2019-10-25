import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        border: "2px solid black",
        width: "28%"
    }
})

export default function Person(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h2>Name: {props.person.name}</h2>
            <div>
                <p>Birth Year: {props.person.birth_year}</p>
                <p>Gender: {props.person.gender}</p>
                <p>Height: {props.person.height}</p>
                <p>Weight: {props.person.mass}</p>
                <p>Hair Colo: {props.person.hair_color}</p>
            </div>
        </div>
    )
}