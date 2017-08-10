//include react
import React, { Component } from 'react';

const Saved = (props) => {
    //deconstructing props
    // const { title } = props.articles;

    return (
            <li className="list-group-item">{props.children}</li>
    )
}

export default Saved;